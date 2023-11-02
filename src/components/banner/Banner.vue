<template >
  <section class="banner container" :data-theme="Store.isDarkMode">
    <div class="banner__desc">
      <h2 class="banner__desc_title">
        {{ $t("banner.bannerTitle") }} <span>{{ $t("banner.bannerTitleSpan") }}</span>
      </h2>
      <div class="banner__desc_sub">
        {{ $t("banner.bannerSub") }}
      </div>
      <a href="#" class="banner__desc_btn"> {{ $t("banner.bannerBtn") }}</a>
    </div>
    <div class="banner__img">
      <img class="banner__img-bg" src="@/assets/img/banner__bg.svg" alt="" />
      <img class="banner__img-user" src="@/assets/img/banner.png" alt="" />
      <img class="banner__img-icon" src="@/assets/img/banner__icon.svg" alt="" />
      <h3> {{ $t("banner.bannerImg") }} <span> {{ $t("banner.bannerImgSpan") }}</span></h3>
    </div>
  </section>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
