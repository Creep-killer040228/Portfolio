<template>
  <a target="_blank" href="https://github.com/Creep-killer040228" class="github" :data-theme="Store.isDarkMode">
    Github
    <span> &#60; &#126; &#62;</span>
  </a>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
