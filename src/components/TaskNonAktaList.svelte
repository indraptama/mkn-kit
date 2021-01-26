<script>
  import TaskNonAktaListItem from "./TaskNonAktaListItem.svelte";
  export let tasksData = [];
</script>

<div>
  <div class="uk-overflow-auto">
    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
      <thead>
        <tr>
          <th class="uk-table-expand uk-text-capitalize">Nama Pekerjaan</th>
          <th class="uk-text-nowrap uk-text-capitalize">Nama Klien</th>
          <th class="uk-text-nowrap uk-text-capitalize">Tgl.Mulai</th>
          <th class="uk-text-nowrap uk-text-capitalize">Staff</th>
          <th class="uk-text-nowrap uk-text-capitalize">Status Terakhir</th>
        </tr>
      </thead>
      <tbody>
        {#each tasksData as task}
          <TaskNonAktaListItem
            id={task.id}
            taskName={task.taskName}
            clients={task.clients}
            startDate={task.startDate}
            staffOnDuty={task.staffOnDuty}
            lastStatus={task.lastStatus}
          />
        {/each}
      </tbody>
    </table>
  </div>
</div>
