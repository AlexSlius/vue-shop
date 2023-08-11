<script setup>
import FilterPrice from "@/components/FilterPrice.vue";
</script>

<template>
    <div class="filters__wrap">
        <h4 class="filter__title filt-bg">Фильтры <span class="filter__close"></span></h4>
        <h5 class="filter__title">Цена</h5>
        <div class="check__block">
            <FilterPrice />
        </div>
    </div>
</template>