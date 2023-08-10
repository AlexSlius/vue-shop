<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    path: String,
    scrImage: String,
    date: String,
    name: String,
    des: String
});
</script>

<template>
    <div class="news-page__item">
        <div class="news-page__img">
            <RouterLink :to="path">
                <img :src="scrImage" alt="image new">
            </RouterLink>
        </div>
        <div class="news-page__text-block">
            <p class="news-page__date">{{ date }}</p>
            <RouterLink :to="path" class="news-page__title">{{ name }}</RouterLink>
            <p class="news-page__text">{{ des }}</p>
            <RouterLink :to="path" class="news-page__disc">Читать >></RouterLink>
        </div>
    </div>
</template>