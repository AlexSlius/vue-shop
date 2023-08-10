<script setup>
defineProps({
    title: {
        type: String,
        default: "АКЦИИ",
    }
})
</script>

<template>
    <div class="news-banner__block">
        <h4 class="news-banner__title filt-bg">{{ title }}</h4>
        <slot></slot>
    </div>
</template>