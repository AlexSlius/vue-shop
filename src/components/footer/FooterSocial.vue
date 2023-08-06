<script setup>
import IconSprite from "@/components/IconSprite.vue";
</script>

<template>
    <div class="footer__social">
        <a href="https://m.vk.com/" class="icon-social vk" target="_blank">
            <IconSprite :tag="'vk'" />
        </a>
        <a href="https://www.instagram.com/" class="icon-social instagram" target="_blank">
            <IconSprite :tag="'instagram'" />
        </a>
        <a href="https://www.youtube.com/?hl=ru&gl=UA" class="icon-social youtube" target="_blank">
            <IconSprite :tag="'youtube'" />
        </a>
    </div>
</template>