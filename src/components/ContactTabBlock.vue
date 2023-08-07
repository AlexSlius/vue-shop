<script setup>
import IconSprite from "@/components/IconSprite.vue";

defineProps({
    desc: String,
    address: String,
    phone: String,
    email: String,
    socials: Array,
    iframeMap: String
})
</script>

<template>
    <p class="contact__text">{{ desc }}</p>
    <div class="contact__info-wrapp">
        <div class="contact__info-block">
            <div class="contact__info-element" v-if="address?.length > 0">
                <p class="contact__info-title">Адрес: </p>
                <p class="contact__info-text">{{ address }} </p>
            </div>
            <div class="contact__info-element" v-if="phone?.length > 0">
                <p class="contact__info-title">Телефон:</p>
                <p class="contact__info-text">{{ phone }}</p>
            </div>
            <div class="contact__info-element" v-if="email?.length > 0">
                <p class="contact__info-title">E-mail:</p>
                <p class="contact__info-text">{{ email }}</p>
            </div>
        </div>
        <a class="info-logo"><img src="/src/assets/img/Logo.svg" alt="logo"></a>
    </div>
    <div class="contact-social">
        <a :href="item.path" class="icon-social telegram" target="_blank" v-for="(item, index) in socials" :key="index">
            <IconSprite :tag="item.type" />
        </a>
    </div>
    <div class="contact__map-wrapp">
        <iframe :src="iframeMap" width="100%" height="375" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>