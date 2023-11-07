<template>
    <div class="not-found container" :data-theme="Store.isDarkMode">
        <h3>Этой страницы не существует <span>404</span></h3>
    </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
