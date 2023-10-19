<template>
  <div>
    <div class="card" :data-theme="Store.isDarkMode">
      <img src="@/assets/img/snekers.png" alt="" />
      <div class="card-stak">{{ card[0].stak }}</div>
      <div class="card-desc">
        <div class="card-desc-title">{{ card[0].name }}</div>
        <div class="card-desc-sub">{{ card[0].desc }}</div>
        <div class="card_link">
          <BtnLive />
          <btnGithub />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BtnLive from "../addition/btnLive.vue";
import btnGithub from "../addition/btnGithub.vue";
import { useData } from "@/stores/data.js";
const Store = useData();
const card = Store.card
</script>

