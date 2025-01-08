<template>
  <header class="app-desktop:hidden flex items-center fixed top-0 left-0 w-full mobile-header">
    <img src="/src/assets/images/logo.svg" alt="logo" class="mobile-logo" />
    <mobile-menu :menu-data="menuData" />
  </header>
  <div class="flxed top-0 left-0 w-full hidden app-desktop:block">
    <header class="mx-auto desktop-header flex">
      <img src="/src/assets/images/logo.svg" alt="logo" class="desktop-logo" />
      <desktop-menu :menu-data="menuData" />
    </header>
  </div>
  <main class="main-content">
    test
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
<style lang="scss" scoped>
// app-desktop:grid grid-cols-[repeat(12,65px)] gap-x-[30px]
$mobile-logo-height: 30px;
$mobile-header-padding: 15px;
$desktop-logo-height: 40px;
$desktop-header-pt: 80px;
$desktop-header-pb: 40px;

.mobile-logo {
  height: $mobile-logo-height;
}

.mobile-header {
  padding: $mobile-header-padding;
}

.desktop-logo {
  height: $desktop-logo-height;
}

.desktop-header {
  padding-top: $desktop-header-pt;
  padding-bottom: $desktop-header-pb;
}

.main-content {
  padding: $mobile-header-padding;
  margin-top:calc(#{$mobile-logo-height} + #{$mobile-header-padding} * 2);
}

@screen app-desktop { 
  .main-content {
    // margin-top: calc(#{$desktop-logo-height} + #{$desktop-header-pt} + #{$desktop-header-pb});
    @apply px-0 py-[15px];
  }
}
</style>