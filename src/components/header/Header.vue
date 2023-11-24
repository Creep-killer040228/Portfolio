<template>
  <Media />
  <header class="header container" >
    <div class="header__wrapper">
      <RouterLink to="/" class="header__wrapper_logo">
        <img src="@/assets/img/Logo.svg" alt="" v-if="!Store.isDarkMode" />
        <img src="@/assets/img/logo__dark.svg" alt="" v-else />
        {{ $t("Logo") }}
      </RouterLink>
      <nav class="header__wrapper_nav">
        <HeaderMenu />
        <div class="translate" @click="toggleTranslate">
          <span class="translate__text-ru" v-if="Store.transleite">RU</span>
          <span class="translate__text-en" v-else>EN</span>
        </div>
        <btnAnimation />
      </nav>
      <transition name="btnClose">
        <div class="burger" @click="toggleBurger">
          <span class="burger-top" :class="{ active: Store.burgBtn }"></span>
          <span class="burger-button" :class="{ active: Store.burgBtn }"></span>
        </div>
      </transition>
    </div>
    <transition name="burgBtn">
      <div class="burger__wrapper" v-if="Store.burgBtn">
        <HeaderMenuBurger @click="toggleBurger" />
        <div class="translate" @click="toggleTranslate">
          <span class="translate__text-ru" v-if="Store.transleite">RU</span>
          <span class="translate__text-en" v-else>EN</span>
        </div>
        <btnAnimation />
        <div class="burger__wrapper_nav-icon">
          <a target="_blank" href="mailto:samveld396@gmail.com"><img src="@/assets/img/Email.svg" alt="" /></a>
          <a target="_blank" href="https://t.me/SamvelDavid"><img src="@/assets/img/Telegram.svg" alt="" /></a>
          <a target="_blank" href="https://github.com/Creep-killer040228"><img src="@/assets/img/Github.svg" alt="" /></a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import Media from "@/components/media/Media.vue";
import btnAnimation from "@/components/addition/btnAnimation.vue";
import HeaderMenu from '@/components/header/HeaderMenu.vue'
import HeaderMenuBurger from '@/components/header/HeaderMenuBurger.vue'
import { computed, watch } from "vue";
import { useData } from "@/stores/data.js";
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });
const Store = useData();
const theme = computed(() => Store.isDarkMode);
const headerStoreTitle = computed(() => Store.header);
const toggleBurger = () => {
  Store.burgBtn = !Store.burgBtn;
};

const toggleTranslate = () => {
  Store.transleite = !Store.transleite;
  if (locale.value === 'en') {
    locale.value = 'ru';
  } else if (locale.value === 'ru') {
    locale.value = 'en';
  }
};

const toggleBodyOverflow = () => {
  if (Store.burgBtn) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};
watch(() => Store.burgBtn, toggleBodyOverflow);
</script>