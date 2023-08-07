<script setup>
import CardNewBanner from "@/components/CardNewBanner.vue";
</script>

<template>
    <div class="news-banner__block">
        <h4 class="news-banner__title filt-bg">Акции </h4>
        <CardNewBanner :scrImg="'/src/assets/img/card__item/basket-1.png'" />
        <CardNewBanner :scrImg="'/src/assets/img/card__item/basket-3.png'" />
    </div>
</template>