<script>
  import ContactListItem from "./ContactListItem.svelte";

  let clients = [{}];
</script>

<div class="uk-overflow-auto">
  <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
    <thead>
      <tr>
        <th class="uk-table-shrink" />
        <th class="uk-table-shrink"></th>
        <th class="uk-table-expand">Nama Lengkap</th>
        <th class="uk-width-small">Domisili</th>
        <th class="uk-table-shrink uk-text-nowrap">No.Telephone</th>
        <th class="uk-table-shrink uk-text-nowrap">Pekerjaan Terakhir</th>
      </tr>
    </thead>
    <tbody>
      {#each clients as client}
        <ContactListItem />
      {/each}
    </tbody>
  </table>
</div>
