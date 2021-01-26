<script>
  import { onMount } from "svelte";
  import ContactList from "../components/ContactList.svelte";
  import db from "../firebase";
  import _ from "lodash";

  import client$ from '../store/clientStore.js';

  // import { collectionData } from 'rxfire/firestore';
  // import { startWith } from 'rxjs/operators';

  // let clients = [];
  

  


  $: searchResults = $client$.filter(client => client.fullName.indexOf(searchValue) !== -1);
  // $: searchResults = searched();
  $: searchValue = "";

  // onMount(async () => {
  //   db.collection("client")
  //     .orderBy("fullName", "asc")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         // const id = doc.id;
  //         const Data = doc.data();
  //         const clientData = { ...Data, id:doc.id };
  //         clients = [...clients, clientData];
  //       });
  //     })
  //     .then((s) => {
  //       // searchResults = _.clone(clients);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  // const query = db.collection('client').orderBy("fullName", "asc");
  // const clients = collectionData(query, 'id').pipe(startWith([]));


</script>

<div class="search-bar">
  <div class="uk-container uk-container-xlarge">
    <div class="uk-grid-medium" uk-grid>
      <div class="uk-width-auto">
        <a href="#/clients/new" class="uk-button uk-button-primary" >Tambah Klien</a>
      </div>
      <div class="uk-width-expand">
        <form class="uk-search uk-search-default uk-width-1-1 bg-white ">
          <a href="#/" uk-search-icon />
          <input class="uk-search-input" type="search" placeholder="Pencarian Nama Klien" bind:value={searchValue}/>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="uk-container uk-container-xlarge uk-margin-top">
  {#if searchResults.length === 0}
    <p>Klien tidak ditemukan</p>
  {:else}
    <ContactList clients={searchResults} />
  {/if}
</div>

<style>
  .search-bar {
    background-color: #ededed;
    padding: 1rem 0;
  }
  .bg-white {
    background-color: #fff;
  }
</style>
