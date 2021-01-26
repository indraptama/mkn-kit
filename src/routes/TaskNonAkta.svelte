<script>
  import TaskNonAktaList from "../components/TaskNonAktaList.svelte";

  import db from "../firebase";
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';

  $: searchValue = $tasksData.filter(task => task.taskName.indexOf(searchValue) !== -1);;

  let mockupData = [{}];

  const query = db.collection('taskNonAkta').orderBy("startDate", "asc");
  const tasksData = collectionData(query, 'id').pipe(startWith([]));



  function handleSubmit() {}
</script>

<div class="search-bar">
  <div class="uk-container uk-container-xlarge">
    <div class="uk-grid-medium" uk-grid>
      <div class="uk-width-auto">
        <a
          href="#/clients/new"
          class="uk-button uk-button-primary uk-text-capitalize">
          Tambah Pekerjaan
        </a>
      </div>
      <div class="uk-width-expand">
        <form class="uk-search uk-search-default uk-width-1-1 bg-white ">
          <a href="#/" uk-search-icon />
          <input
            class="uk-search-input"
            type="search"
            placeholder="Pencarian Nama Klien"
            bind:value={searchValue}
          />
        </form>
      </div>
    </div>
  </div>
</div>

<div class="uk-container uk-container-xlarge uk-margin-medium-top">
  <h1 class="uk-text-lead">Pekerjaan Non Akta</h1>
</div>

<div class="uk-container uk-container-xlarge uk-margin-medium-top">
  <TaskNonAktaList tasksData={searchValue} />
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
