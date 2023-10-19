<template>
  <footer class="footer" :data-theme="Store.isDarkMode">
    <div class="footer__wrapper container">
      <div class="footer__wrapper_desc">
        <div class="footer__wrapper_desc-top">
          <a href="#">
            <img src="@/assets/img/Logo.svg" alt="" v-if="!Store.isDarkMode" />
            <img src="@/assets/img/logo__dark.svg" alt="" v-else />
            {{ $t('Logo') }}</a>
        </div>
        <span>{{ $t('footer.footerText') }}</span>
      </div>
      <div class="footer__wrapper_contacts">
        {{ $t('footer.footerMedia') }}
        <span>
          <a target="_blank" href="mailto:samveld396@gmail.com"><img src="@/assets/img/Email.svg" alt="" /></a>
          <a target="_blank" href="https://t.me/SamvelDavid"><img src="@/assets/img/Telegram.svg" alt="" /></a>
          <a target="_blank" href="https://github.com/Creep-killer040228"><img src="@/assets/img/Github.svg" alt="" /></a>
        </span>
      </div>
    </div>
    <div class="copyright"> {{ $t('footer.footerCopyright') }}</div>
  </footer>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
