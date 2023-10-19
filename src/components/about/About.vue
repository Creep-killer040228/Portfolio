<template>
  <div class="about" :data-theme="Store.isDarkMode">
    <div class="about__title container">
      <img src="@/assets/img/nav_icon.svg" alt="" /> {{ $t('about-me.aboutTitle') }}
      <div class="lines"></div>
    </div>
    <div class="about__wrapper container">
      <div class="about__wrapper_desc">
        <h3>{{ $t('about-me.aboutH3') }}</h3>
        <p>
          {{ $t('about-me.aboutP1') }}
        </p>
        <p>
          {{ $t('about-me.aboutP2') }}
        </p>
      </div>
      <img src="@/assets/img/about.png" alt="" />
    </div>
    <img class="left" src="@/assets/img/about-left.png" alt="" />
    <img class="rigth" src="@/assets/img/about-rigth.png" alt="" />
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
