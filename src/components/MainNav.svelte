<script>
  // import { initAuth } from "../store/loginStore";
  // const { userLogged, logout } = initAuth();

  import {auth} from '../firebase';
  // import {authState} from 'rxfire/auth';

  // let userLogged;
  // const unsubscribe = authState(auth).subscribe(u => userLogged = u);

  import loggedIn$ from "../store/userStore.js";
  const userLogged = loggedIn$;

  const logout = () => auth.signOut();

</script>

<nav class="uk-navbar-container topNav" uk-navbar>
  <div class="uk-navbar-left">
    <a class="uk-navbar-toggle" href="#" uk-toggle="target: #offcanvas-overlay">
      <span uk-navbar-toggle-icon />
    </a>
    <a class="uk-navbar-item" href="#/">
      Kantor Notaris & PPAT Indra Pratama Putra SH, MKn
      </a>
  </div>

  <div class="uk-navbar-right">
    {#if $userLogged}
      <ul class="uk-navbar-nav">
        <li>
          <a href="#/">
            <div class="uk-navbar-item">
              <img
                class="uk-preserve-width uk-border-circle"
                src={$userLogged.photoURL}
                width="36px"
                alt=""
              />
            </div>
          </a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href={`#/user/${$userLogged.uid}`}>My Profile</a></li>
              <li><a href="#/" on:click={logout}>Sign Out</a></li>
            </ul>
          </div>
        </li>
      </ul>
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
          <li><a href="#/ppat/new">Tambah Akta Baru</a></li>
          <li><a href="#/ppat/nonakta">Pekerjaan Non Akta</a></li>
        </ul>
      </li>
      <li class="div">
        <a href="#/nonakta/">Pekerjaan Non Akta</a>
      </li>
      <li class="uk-parent">
        <a href="#/">Laporan</a>
        <ul class="uk-nav-sub">
          <li><a href="#/ppat/dash">Laporan Notaris</a></li>
          <li><a href="#/ppat/pekerjaan">Laporan PPAT</a></li>
          <li><a href="#/ppat/akta">Laporan Wasiat</a></li>
        </ul>
      </li>
      <li class="uk-parent">
        <a href="#/">Tools</a>
        <ul class="uk-nav-sub">
          <li><a href="#/tools/komparisi">Komparisi Generator</a></li>
          <li><a href="#/tools/testprint">Laporan PPAT</a></li>
          <li><a href="#/ppat/akta">Laporan Wasiat</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style>
  .topNav {
    background: linear-gradient(to left, #28a5f5, #1e87f0);
    color: rgba(255, 255, 255, 0.8);
  }

  .topNav * {
    color: rgba(255, 255, 255, 0.8);
  }

  .uk-navbar-dropdown * {
    color: #888 !important;
  }
</style>
