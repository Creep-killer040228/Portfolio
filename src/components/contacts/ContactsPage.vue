<template>
    <div class="contact-page container" :data-theme="Store.isDarkMode">
        <div class="contact-page__title">
            <div class="contact-page__title-list">
                <img src="@/assets/img/title__img.svg" alt="">
                {{ $t('contacts.contactsTitle') }}
            </div>
            <span> {{ $t('about-me.aboutPage') }}</span>
        </div>
        <div class="contact-page__wrapper">
            <div class="contacts__wrapper_text">
                {{ $t('contacts.contactsText') }}
            </div>
            <div class="contact-page__wrapper-card">
                <ContactsHelp />
                <ContactsCard />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
import ContactsCard from "@/components/contacts/ContactsCard.vue";
import ContactsHelp from "@/components/contacts/ContactsHelp.vue";
</script>