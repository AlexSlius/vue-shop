<script setup>
import { RouterLink } from "vue-router";

defineProps({
    dopClass: {
        type: String,
        default: 'flex-grow',
    },
    title: String,
    links: Array
});
</script>

<template>
    <div class="footer__column" :class="dopClass">
        <h5 class="footer__title">{{ title }}</h5>
        <ul class="footer__info">
            <li class="info__item" v-for="(item, index) in links" :key="index">
                <RouterLink :to="item.path" class="info__link">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>