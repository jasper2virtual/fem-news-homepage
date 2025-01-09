<template>
  <div class="bg-app-almost-white app-desktop:hidden fixed top-0 left-0 w-full">

    <header class=" flex items-center  mx-auto mobile-header">
      <img src="/src/assets/images/logo.svg" alt="logo" class="mobile-logo" />
      <mobile-menu :menu-data="menuData" />
    </header>
  </div>
  <div class="bg-app-almost-white fixed top-0 left-0 w-full hidden app-desktop:block">
    <header class="mx-auto desktop-header flex items-center">
      <img src="/src/assets/images/logo.svg" alt="logo" class="desktop-logo" />
      <div class="ml-auto">
        <desktop-menu :menu-data="menuData" />
      </div>
    </header>
  </div>
  <main class="main-content mx-auto flex flex-col gap-8 app-desktop:grid">

    <section class=" flex flex-col gap-8 app-desktop:grid grid-cols-subgrid col-span-8">
      <div class="col-span-full">
        <img class="app-desktop:hidden w-full" src="/src/assets/images/image-web-3-mobile.jpg" alt="hero" />
        <img class="hidden app-desktop:block" src="/src/assets/images/image-web-3-desktop.jpg" alt="hero" />
      </div>

      <h1 class=" text-app-dark-space-blue
    app-text-heading-l font-extrabold
    app-desktop:app-text-heading-xl
    col-span-4
    
    ">The Bright Future of Web 3.0?</h1>

      <div class="flex flex-col gap-6 col-span-4 ">
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands
          of
          the people. But is it really fulfilling its promise?</p>
        <button class=" self-start bg-app-light-vermillion text-app-dark-space-blue font-bold px-6 py-2 text-[.9333rem] tracking-wider
        hover:text-app-almost-white hover:bg-app-dark-space-blue
        ">READ
          MORE</button>
      </div>
    </section>

    <div class="flex flex-col bg-app-dark-space-blue gap-6 p-4 col-span-4">
      <h2 class="text-app-yellow app-text-heading-m">New</h2>
      <ul class="flex flex-col gap-6">
        <template v-for="(newItem, index) in news" :key="index">
          <hr v-if="index > 0" class="mx-4 border-app-silver" />
          <li>
            <h3 class="text-app-almost-white app-text-heading-s hover:cursor-pointer hover:text-app-yellow">{{
              newItem.title }}</h3>
            <p class="text-app-silver">{{ newItem.content }}</p>
          </li>
        </template>
      </ul>
    </div>

    <div class="flex flex-col gap-6 col-span-full app-desktop:grid grid-cols-subgrid ">
      <div v-for="(topic, index) in topicsLoadPic" :key="index" class="flex gap-4 col-span-4">
        <img :src="topic.imgSrc" alt="topic image" class="w-[100px]" />
        <div class="flex flex-col gap-4">
          <h2 class=" text-app-light-vermillion app-text-heading-m">{{ topic.number }}</h2>
          <h3
            class=" text-app-dark-space-blue hover:text-app-light-vermillion hover:cursor-pointer app-text-heading-xs">
            {{ topic.title }}</h3>
          <p class=" text-app-gunmetal">{{ topic.content }}</p>
        </div>
      </div>
    </div>

  </main>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import DesktopMenu from './components/desktop-menu.vue'
import MobileMenu from './components/mobile-menu.vue'
const menuData = ref([
  { text: "Home", path: "./home" },
  { text: "New", path: "./new" },
  { text: "Popular", path: "./popular" },
  { text: "Trending", path: "./trending" },
  { text: "Categories", path: "./categories" }
])

const news = ref([
  { title: "Hydrogen VS Electric Cars", content: "Will hydrogen-fueled cars ever catch up to EVs?", button: "READ MORE" },
  { title: "The Downsides of AI Artistry", content: "What are the possible adverse effects of on-demand AI image generation?", button: "READ MORE" },
  { title: "Is VC Funding Drying Up?", content: "Private funding by VC firms is down 50% YOY. We take a look at what that means.", button: "READ MORE" }
])

const topics = ref([
  { pic: 'image-retro-pcs.jpg', number: '01', title: "Reviving Retro PCs", content: "What happens when old PCs are given modern upgrades?", button: "READ MORE" },
  { pic: 'image-top-laptops.jpg', number: '02', title: "Top 10 Laptops of 2022", content: "Our best picks for various needs and budgets.", button: "READ MORE" },
  { pic: 'image-gaming-growth.jpg', number: '03', title: "The Growth of Gaming", content: "How the pandemic has sparked fresh opportunities.", button: "READ MORE" }
])

const topicsLoadPic = computed(() => {
  return topics.value.map((topic) => {
    return {
      ...topic,
      imgSrc: new URL(`/src/assets/images/${topic.pic}`, import.meta.url).href
    }
  })
})

</script>
<style lang="scss" scoped>
$mobile-logo-height: 30px;
$mobile-header-padding: 15px;
$desktop-logo-height: 40px;
$desktop-header-pt: 80px;
$desktop-header-pb: 40px;

$grid-columns: 12;
$grid-column-width: 65px;
$grid-gap: 30px;
$grid-width: $grid-columns * $grid-column-width + ($grid-columns - 1) * $grid-gap;

.mobile-logo {
  height: $mobile-logo-height;
}

.mobile-header {
  padding: $mobile-header-padding;
  max-width: $grid-width;
}

.desktop-logo {
  height: $desktop-logo-height;
}

.desktop-header {
  padding-top: $desktop-header-pt;
  padding-bottom: $desktop-header-pb;
  max-width: $grid-width;
}

.main-content {
  padding: $mobile-header-padding;
  margin-top:calc(#{$mobile-logo-height} + #{$mobile-header-padding} * 2);
  max-width: $grid-width;
}

@media (min-width: theme('screens.app-desktop')) {
  .main-content {
    margin-top: calc(#{$desktop-logo-height} + #{$desktop-header-pt} + #{$desktop-header-pb});
    padding: 15px 0;
    display: grid;
    grid-template-columns: repeat($grid-columns, $grid-column-width);
    grid-gap: $grid-gap;
  }
}
</style>