<template>
    <div>
        <ul class="burger__wrapper_nav">
            <li>
                <a href="#homes">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.home') }}</a>
            </li>
            <li>
                <a href="#works">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.works') }}</a>
            </li>
            <li>
                <a href="#about">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.about-me') }}</a>
            </li>
            <li>
                <a href="#contact">
                    <img src="@/assets/img/nav_icon.svg" alt="" />
                    {{ $t('nav.contacts') }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>