<template>
  <div :data-theme="headerStore.isDarkMode">
    <Header />
    <RouterView></RouterView>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import { useData } from "./stores/data.js";
import { onMounted, onBeforeMount, watchEffect, ref } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });
const headerStore = useData();

const getDark = () => {
  let local = localStorage.getItem("isDarkMode");
  if (local) {
    headerStore.isDarkMode = JSON.parse(local);
  }
};

const getLocal = () => {
  let local = localStorage.getItem("locale");
  if (local) {
    locale.value = JSON.parse(local);
  }
};

onMounted(() => {
  headerStore.get();
});

onBeforeMount(() => {
  getDark()
  getLocal()
});

const prevLocale = ref(locale.value);

watchEffect(() => {
  if (prevLocale.value !== locale.value) {
    localStorage.setItem("locale", JSON.stringify(locale.value));
    prevLocale.value = locale.value;
  }
});

const prevIsDarkMode = ref(headerStore.isDarkMode);

watchEffect(() => {
  if (headerStore.isDarkMode !== prevIsDarkMode.value) {
    localStorage.setItem("isDarkMode", JSON.stringify(headerStore.isDarkMode));
    prevIsDarkMode.value = headerStore.isDarkMode;
  }
  if (headerStore.isDarkMode) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "#282c33";
  }
});
</script>