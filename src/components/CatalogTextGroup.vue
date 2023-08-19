<script setup>
defineProps({
    pageTitle: String,
    content: String
});
</script>


<template>
    <div class="catalog__text-group">
        <div class="container">
            <h1 class="catalog__name">{{ pageTitle }}</h1>
            <div v-html="content"></div>
        </div>
    </div>
</template>