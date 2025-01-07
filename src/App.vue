<template>
  <header class="flex fixed top-0 left-0">
    <div>
      <img src="/src/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="hidden app-desktop:block ml-auto">
      <desktop-menu :menu-data="menuData" />
    </div>
    <div class="app-desktop:hidden ml-auto">
      <mobile-menu :menu-data="menuData" />
    </div>
  </header>
  <main></main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import DesktopMenu from './components/desktop-menu.vue'
import MobileMenu from './components/mobile-menu.vue'
const menuData = ref([
  { text: "Home", path: "/home" },
  { text: "New", path: "/new" },
  { text: "Popular", path: "/popular" },
  { text: "Trending", path: "/trending" },
  { text: "Categories", path: "/categories" }
])
</script>