<script setup>
let props = defineProps({
    id: Number,
    name: String,
    active: Boolean,
    handle: Function
});
</script>

<template>
    <button class="contact__city" :class="{ 'city-active': active }" @click.event="handle(id)">{{ name }}</button>
</template>