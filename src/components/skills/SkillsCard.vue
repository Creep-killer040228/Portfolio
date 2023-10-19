<template>
  <div class="skills__wrapper_content-desc" :data-theme="Store.isDarkMode">
    <div class="skills__wrapper_content-desc-card">
      <div class="skills__wrapper_content-desc-card-title"> {{ $t("skills.Languages") }} 40%</div>
      <div class="skills__wrapper_content-desc-card-sub">
        JavaScript TypeScript
      </div>
    </div>
    <div class="skills__wrapper_content-desc-card">
      <div class="skills__wrapper_content-desc-card-title">{{ $t("skills.Databases") }} 45%</div>
      <div class="skills__wrapper_content-desc-card-sub">PostgreSQL</div>
    </div>
    <div class="skills__wrapper_content-desc-card">
      <div class="skills__wrapper_content-desc-card-title">{{ $t("skills.Tools") }} 70%</div>
      <div class="skills__wrapper_content-desc-card-sub">
        VSCode Git GitHub Figma
      </div>
    </div>
    <div class="skills__wrapper_content-desc-card">
      <div class="skills__wrapper_content-desc-card-title">{{ $t("skills.Other") }} 90%</div>
      <div class="skills__wrapper_content-desc-card-sub">
        HTML CSS EJS SCSS REST
      </div>
    </div>
    <div class="skills__wrapper_content-desc-card">
      <div class="skills__wrapper_content-desc-card-title">{{ $t("skills.Frameworks") }} 75%</div>
      <div class="skills__wrapper_content-desc-card-sub">
        Vue.js React.js Express.js
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
