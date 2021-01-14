<script>
  import Router from "svelte-spa-router";
  import routes from "./route.js";

  import LoginForm from "./components/LoginForm.svelte";
  import MainNav from "./components/MainNav.svelte";

  import { initAuth } from "./store/loginStore";

  const { userLogged } = initAuth();
</script>

{#if !$userLogged}
  <LoginForm />
{/if}

<MainNav />

<div>
  <Router {routes} />
</div>
