<script setup>
let props = defineProps({
    value: Number,
    name: String,
    max: Number,
    min: Number,
    handle: {
        type: Function,
        default: () => { },
    },
    arg: String,
    other: Number
});
</script>

<template>
    <label class="filter-price__label">
        <input type="number" :min="min" :max="max" placeholder="1000" :value="value"
            @change="(e) => handle(Number(e.target.value))" v-maxminnumber:[arg]="{ min, max, other }" :name="name"
            class="filter-price__input">
    </label>
</template>