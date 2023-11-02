<template>
  <div class="contacts container" :data-theme="Store.isDarkMode" id="contact">
    <router-link to="/contacts" class="contacts__title">
      <img src="@/assets/img/nav_icon.svg" alt="" /> {{ $t('contacts.contactsTitle') }}
      <div class="lines"></div>
    </router-link>
    <div class="contacts__wrapper">
      <div class="contacts__wrapper_text">
        {{ $t('contacts.contactsText') }}
      </div>
      <ContactsCard />
    </div>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
import ContactsCard from "@/components/contacts/ContactsCard.vue";
const Store = useData();
</script>
