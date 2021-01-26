<script>
  import { DateTime } from "luxon";

  export let id = "test";
  export let taskName = "Balik Nama Waris";
  export let clients = [];
  export let startDate = "2021-01-01";

  export let lastStatus = [{
    taskName: "Pengecekan",
    taskDate: "2021-01-15",
    createdBy: {
      name: "Indra Pratama Putra",
      displayName: "indra",
      photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GhkAbNuRA4etC6UweVvgTeFwHBjYduiUhUhmWJU=s96-c",
    },
  }];

  export let staffOnDuty = [
    "hItM4a7PYYbz21XAqXrlHbzf4f63",
    "kEj8lk1nLvVlIgwrHTtm7pPvWnp2",
  ];

  function parseDate(dates) {
    return DateTime.fromISO(dates).setLocale("id").toFormat("dd LLL yyyy");
  }
</script>

<tr>
  <td class="uk-table-link">
    <a href={`#/nonakta/${id}`} class="uk-link-reset">{taskName}</a>
  </td>
  <td>
    {#each clients as client}
      <span class="uk-text-capitalize">{client.fullName}, </span> 
    {/each}
  </td>
  <td>
    {parseDate(startDate)}
  </td>
  <td>
    {#each staffOnDuty as staff}
      <img src="" alt="" />
      {staff}
    {/each}
  </td>
  <td>
    <span class="uk-display-block uk-margin-remove">{lastStatus.taskName}</span>
    <span class="uk-display-block uk-margin-remove uk-text-meta"
      >{parseDate(lastStatus.taskDate)}</span
    >
  </td>
</tr>
