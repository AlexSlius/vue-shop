<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    path: {
        type: String,
        default: "#",
    },
    scrImg: String,
    label: String,
    date: String
});
</script>

<template>
    <RouterLink :to="path" class="news__other">
        <img :src="scrImg" alt="img">
        <span class="news__other-block">
            <spna class="news__other-title" v-if="label?.length > 0">{{ label }}</spna>
            <spna class="news__other-date" v-if="date?.length > 0">{{ date }}</spna>
        </span>
    </RouterLink>
</template>