<script>
  import _ from "lodash";

  import KTPParser from "../components/KTPParser.svelte";

  import client$ from "../store/clientStore.js";

  let clientsList = client$;
  $: selectedClientID = "";
  $: selectedClientDetails = _.filter($clientsList, ["id", selectedClientID]);
</script>

<div class="uk-container uk-container-small uk-margin-medium-top">
  <p>Nama Klien</p>
  <div uk-grid>
    <div class="uk-width-expand">
      <select
        class="uk-select uk-text-capitalize"
        bind:value={selectedClientID}>
        <option value={undefined}>Pilih Nama</option>
        {#each $clientsList as client}
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
