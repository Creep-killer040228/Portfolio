<template>
  <div class="skills container">
    <div class="skills__wrapper">
      <router-link to="/about" class="skills__wrapper_title">
        <img src="@/assets/img/nav_icon.svg" alt="" />
        {{ $t("skills.skillsTitle") }}
        <div class="lines" v-if="$route.path !== '/about'"></div>
      </router-link>
      <div class="skills__wrapper_content">
        <img class="skills__wrapper_content-img" src="@/assets/img/skills__img.png" alt=""
          v-if="$route.path !== '/about'" />
        <SkillsCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillsCard from "@/components/skills/SkillsCard.vue";
import { useData } from "@/stores/data.js";

const Store = useData();
</script>