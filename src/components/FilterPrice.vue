<script setup>
import FieldPrice from "@/components/FieldPrice.vue";
import Range from "@/components/Range.vue";

const props = defineProps({
    max: {
        type: Number,
        default: 20000,
    },
    min: {
        type: Number,
        default: 500,
    },
    valueMin: Number,
    valueMax: Number,
    handleOne: Function,
    handleTwo: Function,
    handleRange: Function
});
</script>

<template>
    <div class="filter-price__inputs">
        <FieldPrice :value="valueMin" :min="min" :max="max" :handle="handleOne" :other="valueMax" :name="'minPrice'"
            :arg="'min'" />
        <span>-</span>
        <FieldPrice :value="valueMax" :min="min" :max="max" :handle="handleTwo" :other="valueMin" :name="'maxPrice'"
            :arg="'max'" />
        <button class="btn-ok">Ok</button>
    </div>
    <Range :data="{ value: [valueMin, valueMax] }" :min="min" :max="max" :handleRange="handleRange" />
</template>

<style scoped>
.btn-ok {
    height: 37px;
    border-radius: 4px;
    background: #EFEFEF;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>