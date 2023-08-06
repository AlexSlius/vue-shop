<script setup>
import IconSprite from "@/components/IconSprite.vue";
</script>

<template>
    <div class="header__contact">
        <a href="tel:8(450) 111 11 11" class="header__phone">8 (450) 111 11 11</a>
        <div class="header__social">
            <a href="https://web.telegram.org/k/" target="_blank" class="icon-social telegram">
                <IconSprite :tag="'telegram'" />
            </a>
            <a href="https://www.whatsapp.com/?lang=ru_RU" target="_blank" class="icon-social whatsapp">
                <IconSprite :tag="'whatsapp'" />
            </a>
            <a href="https://www.skype.com/ru/" target="_blank" class="icon-social skype">
                <IconSprite :tag="'skype'" />
            </a>
        </div>
    </div>
</template>