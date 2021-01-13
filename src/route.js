import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";
import Clients from "./routes/Clients.svelte";

const routes = {
  "/": Home,
  "/about": About,
  "/clients/person": Clients,
};

export default routes;
