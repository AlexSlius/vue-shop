<script setup>
defineProps({
    id: Number,
    keys: String,
    name: String,
    category: String,
    checked: Boolean,
    handle: Function
});
</script>

<template>
    <input type="checkbox" class="checkbox" :id="id" :checked="checked" @change="handle(keys)">
    <label :for="id" class="checkbox__label">{{ name }}
        <span class="under">{{ category }}</span></label>
</template>