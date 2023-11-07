<template>
  <div class="project container" :data-theme="Store.isDarkMode">
    <div class="project__title">
      <img src="@/assets/img/title__img.svg" alt="">
      {{ $t('projects.projectstTitle') }}
    </div>
    <span>
      {{ $t('projects.projectstALL') }}
    </span>
  </div>
  <Works />
  <WorksSmailCard />
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
import Works from "@/components/works/Works.vue";
import WorksSmailCard from "@/components/works/WorksSmailCard.vue";
</script>

