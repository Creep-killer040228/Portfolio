<template>
    <div class="help" :data-theme="Store.isDarkMode">
        <span>
            {{ $t('contacts.supportMeHere') }}
        </span>
        <div class="help_div">
            <img src="@/assets/img/cardsHelps.svg" alt="">
            8600 0304 2519 2626
        </div>
    </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>

<style lang="scss" scoped></style>