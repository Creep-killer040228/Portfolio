<template>
    <div class="translate" @click="toggleTranslate">
        <span class="translate__text-ru" v-if="Store.translate">RU</span>
        <span class="translate__text-en" v-else>EN</span>
    </div>
</template>
  
<script setup>
import { useData } from "@/stores/data.js";
const { translate } = useData();
const toggleTranslate = () => {
    translate.value = !translate.value;
};
</script>