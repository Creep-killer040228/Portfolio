<template>
  <div class="work" :data-theme="Store.isDarkMode" id="works">
    <div class="works container">
      <div class="works__title">
        <router-link to="/projects" class="works__title-name">
          <img src="@/assets/img/nav_icon.svg" alt="" />
          <div v-if="$route.path === '/projects'">
            {{ $t('projects.projectstTitlePage') }}
          </div>
          <div v-else>
            {{ $t('projects.projectstTitle') }}
          </div>
          <div v-if="$route.path !== '/projects'" class="lines"></div>
        </router-link>
        <router-link to="/projects" class="works__title-all" v-if="$route.path !== '/projects'">
          {{ $t('projects.projectstBtn') }}
        </router-link>
      </div>
      <div class="works__wrapper">
        <WorksCard v-for="repos in Store.projectsAll" :key="repos" :repos="repos" />
      </div>
    </div>
    <img class="data" src="@/assets/img/works_.data.png" alt="" />
    <img class="blok" src="@/assets/img/works_blok.png" alt="" />
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
import WorksCard from "@/components/works/WorksCard.vue";
</script>