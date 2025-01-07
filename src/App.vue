<template>
  <header class="flex items-center fixed top-0 left-0 w-full p-4">
    <div>
      <img src="/src/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="hidden app-desktop:block ml-auto">
      <desktop-menu :menu-data="menuData" />
    </div>
    <div class="app-desktop:hidden ml-auto h-14 flex items-center">
      <mobile-menu :menu-data="menuData" />
    </div>
  </header>
  <main class="p-4 mt-[5.5rem]">
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import DesktopMenu from './components/desktop-menu.vue'
import MobileMenu from './components/mobile-menu.vue'
const menuData = ref([
  { text: "Home", path: "./home" },
  { text: "New", path: "./new" },
  { text: "Popular", path: "./popular" },
  { text: "Trending", path: "./trending" },
  { text: "Categories", path: "./categories" }
])
</script>