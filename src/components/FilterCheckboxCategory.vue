<script setup>
defineProps({
    id: Number,
    name: String,
    category: String,
});
</script>

<template>
    <input type="checkbox" class="checkbox" :id="id">
    <label :for="id" class="checkbox__label">{{ name }}
        <span class="under">{{ category }}</span></label>
</template>