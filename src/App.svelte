<script>
  import Router from "svelte-spa-router";
  import routes from "./route.js";

  import LoginForm from "./components/LoginForm.svelte";
  import MainNav from "./components/MainNav.svelte";

  // import { initAuth } from "./store/loginStore";
  // const { userLogged } = initAuth();

  // import {auth} from './firebase';
  // import {authState} from 'rxfire/auth';

  // let userLogged;
  // const unsubscribe = authState(auth).subscribe(u => userLogged = u);

  import loggedIn$ from "./store/userStore.js";

  const user = loggedIn$;

  // console.log(user);
</script>

{#if !$user}
  <LoginForm />
{/if}
<MainNav />
<div>
  <Router {routes} />
</div>
