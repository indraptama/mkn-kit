<script>
  export let params = {};
  import db from "../firebase";
  import { onMount } from "svelte";

  import ClientOverview from '../components/ClientOverview.svelte';

  let clientData = {};
  let clientAddress = {};

  onMount(async () => {
    db.collection("client")
      .where("nik", "==", params.nik)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          clientData = doc.data();
          clientAddress = clientData.address;
        });
      });
  });
  const imageAvatar = (Link, gender) => {
    if (Link === undefined && gender == "male") {
      return "/img/male-ava.png";
    } else if (Link == undefined && gender == "female") {
      return "/img/female-ava.png";
    }
    return Link;
  };

</script>


<div class="uk-container uk-margin-large-top">
  <div uk-grid>
    <!-- Left -->
    <div class="uk-width-1-4">
      <div class="uk-margin">
        <figure>
          <img
            src={imageAvatar(clientData.avatar, clientData.sex)}
            alt=""
            style="width: 256px; border-radius: 1000px" />
        </figure>
      </div>
      <div>
        <p class="uk-text-lead uk-text-capitalize uk-margin-remove-bottom">
          {clientData.fullName}
        </p>
        <p class="uk-text-meta uk-margin-remove">{clientData.nik}</p>
      </div>
    </div>

    <!-- Right -->
    <div class="uk-width-3-4">

      <!-- Tabs -->
      <ul uk-tab>
        <li class="uk-active"><a href="#/" class="uk-text-capitalize">Overview</a></li>
        <li><a href="#/" class="uk-text-capitalize">Histories</a></li>
        <li><a href="#/" class="uk-text-capitalize">Relationship</a></li>
        <li><a href="#/" class="uk-text-capitalize">Documents</a></li>
      </ul>

      <!-- Tabs Content -->
      <ul class="uk-switcher">
        <li class="uk-active">
          <ClientOverview {...clientData} />
        </li>
        <li>Histories still under construction</li>
        <li>Relationship still under construction</li>
        <li>Documents still under construction</li>
      </ul>
    </div>
  </div>
</div>
