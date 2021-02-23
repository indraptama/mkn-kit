<script>

  import client$ from "../store/clientStore.js";
  $: aktaType='';
  $: parties = [{}]

  let clientsList = client$;

</script>

<h1>PPAT AKTA NEW</h1>

<form>
  <div class="uk-container">
    <div class="uk-card uk-card-body uk-card-default uk-margin-medium">
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Judul Akta</p>
        </div>
        <div class="uk-width-expand">
          <select class="uk-select" name="martialStatus" bind:value={aktaType}>
            <option value="ajb">Akta Jual Beli</option>
            <option value="apht">Akta Pemberian Hak Tanggungan </option>
            <option value="aphb">Akta Pembagian Hak Bersama</option>
            <option value="hibah">Akta Hibah</option>
            <option value="tukarMenukar">Akta Tukar Menukar</option>
            <option value="inbreng">Akta Pemasukan dalam Perusahaan</option>
            <option value="pemberianHak">Akta Pemberian Hak Guna Bangunan/Hak Pakai diatas hak Milik</option>
            <option value="skmht">Surat Kuasa Membebankan Hak Tanggungan</option>
          </select>
        </div>
      </div>

      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Nomor & Tgl. Akta</p>
        </div>
        <div class="uk-width-expand">
          <div uk-grid>
            <div class="uk-width-1-4">
              <input type="text" class="uk-input">
            </div>
            <div class="uk-width-3-4">
              <input type="date" class="uk-input">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DATA PENGHADAP -->
    <div class="uk-card uk-card-body uk-card-default uk-margin-medium">
      <h4 class="uk-card-title">Data Penghadap</h4>
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Pihak Pertama</p>
        </div>
        <!-- <div class="uk-width-expand">
          <select class="uk-select uk-text-capitalize" name="martialStatus" bind:value={aktaType}>
            {#each $clientsList as client}
          <option value={client.id}>{client.fullName} ({client.nik})</option>
            {/each}
          </select>
        </div> -->
        <div class="">
         <div uk-grid class="uk-grid-small">
            <div><button on:click|preventDefault={console.log('s')} class="uk-button uk-button-secondary">-</button></div>
            <div><button on:click|preventDefault={console.log('s')} class="uk-button uk-button-primary">+</button></div>
         </div>
        </div>
      </div>
    </div>

    <!-- DATA TANAH -->
  </div>
</form>
