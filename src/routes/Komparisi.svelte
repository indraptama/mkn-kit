<script>
  import { onMount } from "svelte";
  import _ from "lodash";
  import db from "../firebase";
  import KTPParser from "../components/KTPParser.svelte";

  import { initAuth } from "../store/loginStore";
  const { userLogged } = initAuth();

  let clientsList = [];
  $: selectedClientID = "";
  $: selectedClientDetails = _.filter(clientsList, ["id", selectedClientID]);

  onMount(async () => {
    db.collection("client")
      .orderBy("fullName", "asc")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          let data = doc.data();
          let clientData = { ...data, id: doc.id };
          clientsList = [...clientsList, clientData];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function handleSubmit() {
    let result = _.filter(clientsList, ["id", selectedClientID]);
    console.log(result[0]);
  }
</script>

<div class="uk-container uk-container-small uk-margin-medium-top">
  <p>Nama Klien</p>
  <div uk-grid>
    <div class="uk-width-expand">
      <select
        class="uk-select uk-text-capitalize"
        bind:value={selectedClientID}>
        <option value={undefined}>Pilih Nama</option>
        {#each clientsList as client}
          <option value={client.id}>
            {`${client.fullName.toUpperCase()} (${client.nik})`}
          </option>
        {/each}
      </select>
    </div>
    <div class="uk-width-auto">
      <a href="#/clients/new" class="uk-button uk-button-primary" type="submit">
        Tambah Klien Baru
      </a>
    </div>
  </div>
</div>

<div class="uk-container uk-container-small uk-margin-medium-top">
  {#if selectedClientDetails.length === 1}
    {#each selectedClientDetails as cDetails}
      <div class="uk-card uk-card-body uk-card-default">
        <KTPParser {...cDetails} />
      </div>
    {/each}
  {:else}
    <p>No Selected Client</p>
  {/if}
</div>
