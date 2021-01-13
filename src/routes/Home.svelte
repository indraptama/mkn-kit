<script>
  import LoginForm from "../components/LoginForm.svelte";
  let userLoged = false;
</script>

<style>
  .loginPage {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-image: url("./img/bg-home3.jpg");
    background-position: center;
    background-size: cover;
  }

  .text-white {
    color: #fff;
  }
</style>

{#if userLoged}
  <div class="loginPage">
    <div style="width: 480px; margin-left: 10%; margin-bottom: 100px">
      <div class="text-white">
        <h2 class="uk-heading-small text-white uk-margin-small-bottom">
          Hallo,
        </h2>
        <p>
          Selamat datang di Kantor Notaris Indra Pratama Putra SH, MKn.<br />Silahkan
          login untuk dapat mengaksaes aplikasi ini.
        </p>
      </div>
      <LoginForm />
    </div>
  </div>
{/if}

