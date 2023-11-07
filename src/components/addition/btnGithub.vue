<template>
  <a target="_blank" :href="`https://github.com/Creep-killer040228/${repos.urlGit}`" class="live"
    :data-theme="Store.isDarkMode">
    GitHub
    <span> &#60; &#126; &#62;</span>
  </a>
</template>
 
<script setup>
import { defineProps } from 'vue';
import { useData } from "@/stores/data.js";
const Store = useData();
const props = defineProps({
  repos: { type: Object },
});
</script>