<template>
  <div class="skills__wrapper_content-desc" :class="{ active: this.$route.path == '/about' }"
    :data-theme="Store.isDarkMode">
    <div class="skills__wrapper_content-desc-card" v-for="skils in Store.skilss" :key="skils.id">
      <div class="skills__wrapper_content-desc-card-title"> {{ $t(`skills.${skils.lang}`) }} {{ skils.title }}</div>
      <div class="skills__wrapper_content-desc-card-sub">
        {{ skils.skill }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
