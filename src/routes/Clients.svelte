<script>
  import { onMount } from "svelte";
  import ContactList from "../components/ContactList.svelte";
  import db from "../firebase";

  let clients = [];

  onMount(async () => {
    db.collection("client")
      .orderBy("fullName", "asc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const Data = doc.data();
          const clientData = { ...Data, id };
          clients = [...clients, clientData];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
</script>


<div class="uk-container uk-container-xlarge uk-margin-top">
  <ContactList {clients} />
</div>
