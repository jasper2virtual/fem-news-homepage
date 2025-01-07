<template>
    <button v-if="!isOpen" class="hambuger" @click="openMenu">
        <img src="/src/assets/images/icon-menu.svg" alt="menu" />
    </button>
    <button v-else class="hambuger" @click="closeMenu">
        <img src="/src/assets/images/icon-menu-close.svg" alt="close" />
    </button>

    <transition>
        <div v-if="isOpen" class="bg-black/50 fixed h-full w-full top-0 left-0 -z-10">
            <div class="flex flex-col p-4 w-8/12 ml-auto bg-app-almost-white h-full">
                <div class="h-full max-h-32"></div>
                <nav class="app-text-heading-xs text-app-dark-space-blue font-normal flex flex-col gap-6">
                    <li v-for="menuItem in menuData" class="list-none">
                        <a :href="menuItem.path">{{ menuItem.text }}</a>
                    </li>
                </nav>
            </div>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
defineProps<{
    menuData: Array<{ text: string; path: string }>;
}>();
const isOpen = ref(false);
const openMenu = () => {
    isOpen.value = true;
};
const closeMenu = () => {
    isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.hambuger {
    @apply aspect-square;
    width: 40px;
    @apply grid place-content-center;
}

.v-enter-active,
.v-leave-active {
    transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
}
</style>