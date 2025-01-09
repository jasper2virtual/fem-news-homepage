<template>
    <nav class="text-app-gunmetal flex gap-6 ml-auto items-center">
        <li v-for="menuItem in menuData" class="list-none">
            <a class="hover:text-app-light-vermillion" :href="menuItem.path">{{ menuItem.text }}</a>
        </li>
    </nav>
</template>
<script lang="ts" setup>
defineProps<{
    menuData: Array<{ text: string; path: string }>;
}>();
</script>