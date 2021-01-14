import { readable } from "svelte/store";
import { auth, googleProvider } from "../firebase";

const userMapper = (claims) => ({
  id: claims.user_id,
  name: claims.name,
  email: claims.email,
  picture: claims.picture,
});

export const initAuth = (useRedirect = false) => {

  const loginWithEmailPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const loginWithGoogle = () => {
    const provider = googleProvider;

    if (useRedirect) {
      return auth.signInWithRedirect(provider);
    } else {
      return auth.signInWithPopup(provider);
    }
  };

  const logout = () => auth.signOut();

  // Wrap firebase user in a svelte readable store
  const userLogged = readable(null, (set) => {
    const unsub = auth.onAuthStateChanged(async (fireUser) => {
      if (fireUser) {
        const token = await fireUser.getIdTokenResult();
        const user = userMapper(token.claims);
        set(user);
      } else {
        set(null);
      }
    });
    return unsub;
  });

  return {
    userLogged,
    loginWithGoogle,
    loginWithEmailPassword,
    logout,
  };
};
