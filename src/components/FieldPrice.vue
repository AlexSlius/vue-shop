<script setup>
let props = defineProps({
    value: Number,
    max: Number,
    min: Number,
    handle: {
        type: Function,
        default: () => { },
    }
});
</script>

<template>
    <label class="filter-price__label">
        <input type="number" :min="min" :max="max" placeholder="1000" :value="value" @input="(e) => handle(e.target.value)"
            class="filter-price__input">
    </label>
</template>