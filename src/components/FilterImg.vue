<script setup>
import { RouterLink } from "vue-router";

defineProps({
    data: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <RouterLink :to="item.path" class="filter-img" v-for="(item, index) in data" :key="index">
        <img :src="item.scrimg" alt="img">
        <span class="filter-name">{{ item.name }}</span>
        <span class="filter-details">Подробнее>></span>
    </RouterLink>
</template>