<template>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-icon rotate-n-15">
          <img id="mini-logo" class="mini-logo img-fluid nav-link-svg mx-2" src="../../assets/Icons/sumo-fighter.svg" alt="logo-mini">
        </div>
        <div class="sidebar-brand-text mx-3"><img src="../../assets/Icons/Logo.svg" alt="logo-big"></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link :to="{ name: 'app' }" class="nav-link">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/creativity.svg" alt="">
          <span>Your Design</span></router-link>
      </li>
      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/seo-template.svg" alt="">
          <span>Template</span></a>
      </li>
     <li class="nav-item">
        <a class="nav-link" href="photos.html">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/frame-landscape.svg" alt="">
          <span>Photos</span></a>
      </li>
      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="recent.html">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/painter-palette.svg" alt="">
          <span>Recent</span></a>
      </li>
      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="folders.html">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/open-folder.svg" alt="">
          <span>Folders</span></a>
      </li>
      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="drafts.html">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/template.svg" alt="">
          <span>Drafts</span></a>
      </li>
      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="team.html">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/team.svg" alt="">
          <span>Team</span></a>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'settings' }" class="nav-link">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/admin-with-cogwheels.svg" alt="">
          <span>Settings</span>
          </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html">
          <img class="img-fluid nav-link-svg mx-2" src="../../assets/Icons/play-button-filled.svg" alt="">
          <span>Tutorials</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
</template>

<script>
    export default {
        mounted() {
          
        }
    }
</script>