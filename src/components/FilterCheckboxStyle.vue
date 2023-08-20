<script setup>
defineProps({
    id: Number,
    keys: String,
    name: String,
    style: String,
    class: String,
    classSpan: String,
    checked: Boolean,
    handle: Function
});
</script>

<template>
    <input type="checkbox" class="checkbox" :id="id" :checked="checked" @change="handle(keys)">
    <label :for="id" class="checkbox__label" :class="class">{{ name }}
        <span :class="classSpan">{{ style }}</span></label>
</template>