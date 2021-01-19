<script>
  import { onMount } from "svelte";
  import db from "../firebase";
  import _ from "lodash";

  import AktaList from '../components/AktaList.svelte';

  const aktas = [{}];
  // $: searchResults = aktas.filter(akta => akta.fullName.indexOf(searchValue) !== -1);
  $: searchResults = "";
  $: searchValue = "";

  onMount(async () => {
    db.collection('notarisAkta')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        aktas = [...aktas, data];
      })
    })
  });

</script>


<div class="search-bar">
  <div class="uk-container uk-container-xlarge">
    <div class="uk-grid-medium" uk-grid>
      <div class="uk-width-auto">
        <a href="#/clients/new" class="uk-button uk-button-primary" >Tambah Akta</a>
      </div>

      <div class="uk-width-expand">
        <div class="uk-grid-collapse" uk-grid>
          <div>
            <select class="uk-select">
              <option>Nama Klien</option>
              <option>Tanggal Akta</option>
          </select>
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
  </div>
</div>

<AktaList />

<style>
  .search-bar {
    background-color: #ededed;
    padding: 1rem 0;
  }
  .bg-white {
    background-color: #fff;
  }
</style>