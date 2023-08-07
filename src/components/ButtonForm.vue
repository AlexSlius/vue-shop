<script setup>
defineProps({
    name: {
        type: String,
        default: 'Отправить'
    },
    handle: Function
})
</script>

<template>
    <button class="contact-btn btn" @click.event="handle">{{ name }}</button>
</template>