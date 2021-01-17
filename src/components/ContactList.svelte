<script>
  import ContactListItem from "./ContactListItem.svelte";

  export let clients = [{
    fullName: "Jhon Wick Sutisna",
    address: {
      kelurahan: "Tarogong Kidul",
      kecamatan: "Tarogong",
      city: "Kabupaten Garut"
    }
  }];
</script>

<div class="uk-overflow-auto">
  <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
    <thead>
      <tr>
        <th class="uk-table-shrink" />
        <th class="uk-table-shrink"></th>
        <th class="uk-table-expand">Nama Lengkap</th>
        <th class="uk-text-nowrap">Domisili</th>
        <th class="uk-text-nowrap">No.Telephone</th>
        <th class="uk-text-nowrap">Pekerjaan Terakhir</th>
      </tr>
    </thead>
    <tbody>
      {#each clients as client}
        <ContactListItem 
          nik={client.nik}
          fullName={client.fullName}
          id={client.id}
          address={client.address}
          avatar={client.avatar}
          phone={client.phone}
          lastJob={client.lastJob}
        />
      {/each}
    </tbody>
  </table>
</div>
