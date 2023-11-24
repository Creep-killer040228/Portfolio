<template>
  <div class="skills__wrapper_content-desc" :class="{ active: $route.path === '/about' }">
    <div class="skills__wrapper_content-desc-card" v-for="skill in Store.skills" :key="skill.id">
      <div class="skills__wrapper_content-desc-card-title"> {{ $t(`skills.${skill.lang}`) }} {{ skill.title }}</div>
      <div class="skills__wrapper_content-desc-card-sub">
        {{ skill.skill }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>