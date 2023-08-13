<script setup>
import { reactive } from "vue";

import FieldPrice from "@/components/FieldPrice.vue";
import Range from "@/components/Range.vue";

const props = defineProps({
    max: {
        type: Number,
        default: 10000,
    },
    min: {
        type: Number,
        default: 500,
    },
});

const data = reactive({
    value: [props.min, props.max],
});

const handleOne = (value) => {
    let valNum = Number(value);
    data.value = [valNum, data.value[1]];
}

const handleTwo = (value) => {
    let valNum = Number(value);
    data.value = [data.value[0], valNum];
}
</script>

<template>
    <div class="filter-price__inputs">
        <FieldPrice :value="data.value[0]" :min="min" :max="max" :handle="handleOne" />
        <span>-</span>
        <FieldPrice :value="data.value[1]" :min="min" :max="max" :handle="handleTwo" />
    </div>
    <Range :data="data" />
</template>