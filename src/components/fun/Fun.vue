<template>
    <div class="fun container" :data-theme="Store.isDarkMode">
        <div class="fun__title">
            <img src="@/assets/img/nav_icon.svg" alt="">
            {{ $t('fun.funTitle') }}
        </div>
        <div class="fun__wpapper">
            <div class="fun__wpapper_desc">
                <span> {{ $t('fun.funFacts.football') }}</span>
                <span> {{ $t('fun.funFacts.Dyrachyo') }}</span>
                <span> {{ $t('fun.funFacts.song') }}</span>
                <span> {{ $t('fun.funFacts.anime') }}</span>
                <span> {{ $t('fun.funFacts.game') }}</span>
            </div>
            <img class="fun__wpapper_img" src="../../assets/img/my__facts.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>

<style lang="scss" scoped></style>