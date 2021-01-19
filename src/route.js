import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";
import Clients from "./routes/Clients.svelte";
import ClientNew from './routes/ClientNew.svelte';
import ClientSingle from './routes/ClientSingle.svelte';

// Notaris
import Akta from './routes/Akta.svelte';

const routes = {
  "/": Home,
  "/about": About,
  "/clients/person": Clients,
  "/clients/new": ClientNew,
  "/clients/:nik": ClientSingle,

  "/notaris/akta": Akta,
};

export default routes;
