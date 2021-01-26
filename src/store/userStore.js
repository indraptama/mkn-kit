import { auth } from "../firebase";
import { authState } from "rxfire/auth";
import { filter } from "rxjs/operators";

const loggedIn$ = authState(auth).pipe(filter((user) => !!user));

// const loggedIn$ = authState(auth).subscribe(user =>  !!user);
export default loggedIn$;
