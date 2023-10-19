<template>
  <div class="contacts__wrapper_card" :data-theme="Store.isDarkMode">
    <div class="contacts__wrapper_card-title">{{ $t('contacts.contactsMessage') }}</div>
    <div class="contacts__wrapper_card-cont">
      <a target="_blank" href="https://t.me/SamvelDavid"><img src="@/assets/img/Telegram.svg" alt="" />
        SamvelDavid
      </a>
      <a target="_blank" href="mailto:samveld396@gmail.com"><img src="@/assets/img/Email.svg" alt="" />
        samveld396@gmail.com
      </a>
    </div>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
</script>
