<script>
  import Router from 'svelte-spa-router';
  import routes from './route.js';

  import MainNav from './components/MainNav.svelte';
</script>


<MainNav />
<div>
  <Router {routes} />
</div>