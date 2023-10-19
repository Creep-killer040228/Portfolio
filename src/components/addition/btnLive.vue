<template>
  <a
    target="_blank"
    href="https://sneakers-git-master-samvels-projects.vercel.app/"
    class="live"
    :data-theme="Store.isDarkMode"
  >
    Live
    <span> &#60; &#126; &#62;</span>
  </a>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
