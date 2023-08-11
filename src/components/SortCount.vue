<script setup>
import SelectSort from "@/components/SelectSort.vue";
</script>

<template>
    <div class="sort-count__block">
        <div class="filter__btn btn">Фильтры</div>
        <div class="sort-column">
            <div class="sort-text"> Сортировать по:</div>
            <SelectSort :value="'Популярности'" />
        </div>
        <div class="count-colum">Товаров: <span class="red">28</span></div>
    </div>
</template>