<template>
  <div class="quate" >
    <div class="container">
      <div class="quate__wrapper">
        <div class="quate__wrapper_title">
          {{ $t('quote.quoteBig') }}
          <img class="top" src="@/assets/img/quate__icon.svg" alt="" />
          <img class="but" src="@/assets/img/quate__icon.svg" alt="" />
        </div>
        <span class="quate__wrapper_span"> {{ $t('quote.quoteMin') }}</span>
      </div>
      <img class="bg" src="@/assets/img/quate__bg.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
