<script setup>
defineProps({
    id: Number,
    name: String,
    style: String,
    class: String,
    classSpan: String
});
</script>

<template>
    <input type="checkbox" class="checkbox" :id="id">
    <label :for="id" class="checkbox__label" :class="class">{{ name }}
        <span :class="classSpan">{{ style }}</span></label>
</template>