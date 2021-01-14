<script>
  import { initAuth } from "../store/loginStore";

  const { userLogged } = initAuth();

</script>
<style>
  .topNav {
    background: linear-gradient(to left, #28a5f5, #1e87f0);
    color: rgba(255, 255, 255, 0.8);
  }

  .topNav * {
    color: rgba(255, 255, 255, 0.8);
  }
</style>

<nav class="uk-navbar-container topNav" uk-navbar>
  <div class="uk-navbar-left">
    <a class="uk-navbar-toggle" href="#" uk-toggle="target: #offcanvas-overlay">
      <span uk-navbar-toggle-icon />
    </a>
    <a class="uk-navbar-item" href="#/">Kantor Notaris & PPAT Indra Pratama
      Putra SH, MKn</a>
  </div>

  <div class="uk-navbar-center">
    <div class="uk-navbar-item">
      <form action="javascript:void(0)">
          <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
          <button class="uk-button uk-button-default">Button</button>
      </form>
  </div>
  </div>

  <div class="uk-navbar-right">
    {#if $userLogged}
      <div class="uk-navbar-item">{$userLogged.id}</div>
    {/if}
  </div>
</nav>

<div id="offcanvas-overlay" uk-offcanvas="overlay: true">
  <div class="uk-offcanvas-bar">
    <button class="uk-offcanvas-close" type="button" uk-close />

    <ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
      <li class="uk-active"><a href="#/">Baranda Utama</a></li>
      <li class="uk-parent">
        <a href="#/">Klien</a>
        <ul class="uk-nav-sub">
          <li><a href="#/clients/person">Klien Perorangan</a></li>
          <li><a href="#/clients/organization">Klien Badan</a></li>
        </ul>
      </li>
      <li class="uk-parent">
        <a href="#/">Notaris</a>
        <ul class="uk-nav-sub">
          <li><a href="#/notaris/dash">Beranda Notaris</a></li>
          <li><a href="#/notaris/pekerjaan">Daftar Pekerjaan</a></li>
          <li><a href="#/notaris/akta">Akta</a></li>
          <li><a href="#/notaris/dibukukan">Surat Dibukukan</a></li>
          <li><a href="#/notaris/didaftarkan">Surat Didaftarkan</a></li>
          <li><a href="#/notaris/wasiatdanwaris">Wasiat & Waris</a></li>
          <li><a href="#/notaris/nonakta">Pekerjaan Non Akta</a></li>
        </ul>
      </li>
      <li class="uk-parent">
        <a href="#/">P.P.A.T</a>
        <ul class="uk-nav-sub">
          <li><a href="#/ppat/dash">Beranda ppat</a></li>
          <li><a href="#/ppat/pekerjaan">Daftar Pekerjaan</a></li>
          <li><a href="#/ppat/akta">Akta</a></li>
          <li><a href="#/ppat/nonakta">Pekerjaan Non Akta</a></li>
        </ul>
      </li>
      <li class="uk-parent">
        <a href="#/">Laporan</a>
        <ul class="uk-nav-sub">
          <li><a href="#/ppat/dash">Laporan Notaris</a></li>
          <li><a href="#/ppat/pekerjaan">Laporan PPAT</a></li>
          <li><a href="#/ppat/akta">Laporan Wasiat</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
