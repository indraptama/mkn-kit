<script>
  import { initAuth } from "../store/loginStore";

  import { auth, googleProvider } from '../firebase';

  // const {
  //   loginWithEmailPassword,
  //   loginWithGoogle,
  //   logout,
  //   userLogged,
  // } = initAuth();

  let error = null;
  $: email = "";
  $: password = "";

  const handleLogin = async (event) => {
    try {
      error = null;
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      error = err;
    }
  };

  const loginWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  }
</script>

<style>
  .loginPage {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-image: url("./img/bg-home3.jpg");
    background-position: center;
    background-size: cover;
    z-index: 999;
  }

  .text-white {
    color: #fff;
  }
</style>

<div class="loginPage">
  <div style="width: 480px; margin-left: 10%; margin-bottom: 100px">
    <div class="text-white">
      <h2 class="uk-heading-small text-white uk-margin-small-bottom">Hallo,</h2>
      <p>
        Selamat datang di Kantor Notaris Indra Pratama Putra SH, MKn.<br />Silahkan
        login untuk dapat mengaksaes aplikasi ini.
      </p>
    </div>

    <div class="uk-card uk-card-default uk-card-body">
      <button on:click={loginWithGoogle} class="uk-button uk-width-1-1 uk-margin">Login with Google</button>
      <form class="uk-form-stacked" on:submit={handleLogin}>
        <div class="uk-margin">
          <div class="uk-form-controls">
            <label class="uk-form-label" for="form-stacked-text">E-Mail</label>
            <input
              bind:value={email}
              class="uk-input"
              type="text"
              placeholder="Email Anda" />
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-form-controls">
            <label
              class="uk-form-label"
              for="form-stacked-text">Password</label>
            <input
              bind:value={password}
              class="uk-input"
              type="password"
              placeholder="Password" />
          </div>
        </div>
        <div class="uk-margin-medium-top">
          <button
            type="submit"
            class="uk-button uk-button-primary uk-width-1-1">Masuk</button>
        </div>
      </form>
    </div>
  </div>
</div>
