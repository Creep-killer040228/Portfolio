<template>
    <div class="smail-list container">
        <div class="smail-list__item" v-for="smail in Store.smailItem" :key="smail.id">
            <div class="smail-list__item_title">{{ smail.stak }}</div>
            <div class="smail-list__item_desc">
                <div class="smail-list__item_desc-title">{{ smail.descTitle }}</div>
                <div class="smail-list__item_desc-sub">{{ smail.descSub }}</div>
                <BtnGithubs  />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useData } from "@/stores/data.js";
import BtnGithubs from "../addition/btnGithubs.vue";
const Store = useData();

</script>
  
<style lang="scss" scoped></style>