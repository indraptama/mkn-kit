<script>
  export let nik = "";
  export let fullName = "test";
  export let id = "test";
  export let kelurahan = "tset";
  export let kecamatan = "tse";
  export let city = "tse";
  export let avatar = "ts";
  export let phone = "ts";
  export let lastJob = "2021-01-18";
</script>

<tr>
  <td><input class="uk-checkbox" type="checkbox" /></td>
  <td>
    <img
      class="uk-preserve-width uk-border-circle"
      src={avatar}
      width="40px"
      alt="" />
  </td>
  <td class="uk-table-link"><a class="uk-link-reset" href="{`#/clients/persons/${id}`}">{fullName}</a></td>
  <td class="uk-text-truncate">{kelurahan}, {kecamatan}, {city}</td>
  <td class="uk-text-nowrap">{phone}</td>
  <td class="uk-text-nowrap">{lastJob}</td>
</tr>
