<template>
  <div class="work" :data-theme="Store.isDarkMode" id="works">
    <div class="works container">
      <div class="works__title">
        <span class="works__title-name">
          <img src="@/assets/img/nav_icon.svg" alt="" />
          {{ $t('projects.projectstTitle') }}
          <div class="lines"></div>
        </span>
        <router-link to="" class="works__title-all"> {{ $t('projects.projectstBtn') }} </router-link>
      </div>
      <div class="works__wrapper">
        <WorksCard v-for="repos in Store.card" :key="repos" :repos="repos" />
      </div>
    </div>
    <img class="data" src="@/assets/img/works_.data.png" alt="" />
    <img class="blok" src="@/assets/img/works_blok.png" alt="" />
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
import WorksCard from "../works/WorksCard.vue";
</script>
