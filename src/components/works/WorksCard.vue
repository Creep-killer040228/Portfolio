<template>
  <div>
    <div class="card" :data-theme="Store.isDarkMode">
      <img :src="`img/card${repos.img}.png`" alt="" />
      <div class="card-stak">{{ repos.stak }}</div>
      <div class="card-desc">
        <div class="card-desc-title">{{ repos.name }}</div>
        <div class="card-desc-sub">{{ repos.desc }}</div>
        <div class="card-link">
          <BtnLive :repos="repos" />
          <BtnGithub />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BtnLive from "../addition/btnLive.vue";
import BtnGithub from "../addition/btnGithub.vue";
import { useData } from "@/stores/data.js";
const Store = useData();
const props = defineProps({
  repos: { type: Object },
});
</script>