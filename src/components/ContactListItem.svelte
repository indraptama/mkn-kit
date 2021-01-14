<script>

  import initialName from '../logic/initialName.js';
  import nameColor from '../logic/nameColor.js';


  export let nik = "";
  export let fullName = "test";
  export let id = "test";
  export let address = {
    kelurahan: "",
    kecamatan: "",
    city: "",
  };
  export let avatar = undefined;
  export let phone = "0812123456789";
  export let lastJob = "2021-01-18";

  


</script>

<style>
  .uk-block {
    display: block;
  }

  .NameFirst {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 999px;
  }

  .NameFirst-item {
    margin: 0;
    padding: 0;
    line-height: 0;
    color: #fff;
  }
</style>

<tr>
  <td><input class="uk-checkbox" type="checkbox" /></td>
  <td>
    {#if avatar}
      <img
        class="uk-preserve-width uk-border-circle"
        src={avatar}
        width="40px"
        alt="" />
    {:else}
      <div class="NameFirst" style={`background-color: ${nameColor(fullName.charAt(0))}`}>
        <div class="NameFirst-item uk-text-uppercase">
          {initialName(fullName)}
        </div>
      </div>
    {/if}
  </td>
  <td class="uk-table-link">
    <a class="uk-link-reset" href={`#/clients/persons/${id}`}>
      <span class="uk-block uk-text-capitalize"> {fullName} </span>
      <span class="uk-text-meta">{nik}</span>
    </a>
  </td>
  <td class="uk-text-nowrap uk-text-capitalize">
    {address.kelurahan},
    {address.kecamatan},
    {address.city}
  </td>
  <td class="uk-text-nowrap uk-text-capitalize">{phone}</td>
  <td class="uk-text-nowrap uk-text-capitalize">{lastJob}</td>
</tr>
