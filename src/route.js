import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";
import Clients from "./routes/Clients.svelte";
import ClientNew from './routes/ClientNew.svelte';
import ClientSingle from './routes/ClientSingle.svelte';

// Notaris
import Akta from './routes/Akta.svelte';

// PPAT
import PPATAktaNew from './routes/PPATAktaNew.svelte';

// Non Akta
import TaskNonAkta from './routes/TaskNonAkta.svelte';

// Tools
import Komparisi from './routes/Komparisi.svelte';
import TestPrint from './routes/TestPrint.svelte';

const routes = {
  "/": Home,
  "/about": About,
  "/clients/person": Clients,
  "/clients/new": ClientNew,
  "/clients/:nik": ClientSingle,

  "/notaris/akta": Akta,

  "/ppat/new": PPATAktaNew, 

  "/nonakta/": TaskNonAkta, 
  

  "/tools/komparisi": Komparisi,

  "/tools/testprint": TestPrint,
};

export default routes;
