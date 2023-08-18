<script setup>
import SelectSort from "@/components/SelectSort.vue";

defineProps({
    quantity: {
        type: Number,
        default: 0
    },
    valueSelect: Object,
    handleSelect: Function
})
</script>

<template>
    <div class="sort-count__block">
        <div class="filter__btn btn">Фильтры</div>
        <div class="sort-column">
            <div class="sort-text"> Сортировать по:</div>
            <SelectSort :value="valueSelect.name" :handleSelect="handleSelect" />
        </div>
        <div class="count-colum">Товаров: <span class="red">{{ quantity }}</span></div>
    </div>
</template>