import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";
import Clients from "./routes/Clients.svelte";
import ClientNew from './routes/ClientNew.svelte';


const routes = {
  "/": Home,
  "/about": About,
  "/clients/person": Clients,
  "/clients/new": ClientNew
};

export default routes;
