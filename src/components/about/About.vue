<template>
  <div class="about" :data-theme="Store.isDarkMode" id="about">
    <RouterLink to="/about" class="about__title container" :class="{ active: this.$route.path === '/about' }">
      <div class="about__title">
        <img src="@/assets/img/nav_icon.svg" alt="" v-if="this.$route.path !== '/about'" />
        <img src="@/assets/img/title__img.svg" alt="" v-else />
        {{ $t('about-me.aboutTitle') }}
        <div class="lines" v-if="this.$route.path !== '/about'"></div>
      </div>
      <span v-if="this.$route.path === '/about'" class="about__title_sub">
        {{ $t('about-me.aboutPage') }}
      </span>
    </RouterLink>

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
    <img class="rigth" src="@/assets/img/about-rigth.png" alt="" />
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
