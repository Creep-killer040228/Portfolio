<template>
    <div >
        <ul class="burger__wrapper_nav">
            <li>
                <router-link to="/">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.home') }}
                </router-link>
            </li>
            <li>
                <router-link to="/projects">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.works') }}
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.about-me') }}
                </router-link>
            </li>
            <li>
                <router-link to="/contacts">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.contacts') }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
  
<script setup>

</script>