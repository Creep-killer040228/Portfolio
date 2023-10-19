<template>
  <div class="skills container" :data-theme="Store.isDarkMode">
    <div class="skills__wrapper">
      <div class="skills__wrapper_title">
        <img src="@/assets/img/nav_icon.svg" alt="" />
        {{ $t("skills.skillsTitle") }}
        <div class="lines"></div>
      </div>
      <div class="skills__wrapper_content">
        <img class="skills__wrapper_content-img" src="@/assets/img/skills__img.png" alt="" />
        <SkillsCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillsCard from "./SkillsCard.vue";
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
