<script setup>
import FilterCheckboxCategory from "@/components/FilterCheckboxCategory.vue";
import FilterCheckboxStyle from "@/components/FilterCheckboxStyle.vue";

const DATA_FILTER = {
    categorys: [
        {
            id: 0,
            name: "polarized",
            category: "Поляризационны"
        },
        {
            id: 1,
            name: "double lens",
            category: "Двойная линза"
        },
        {
            id: 2,
            name: "fit over glass",
            category: "Укладываться на стекло"
        },
        {
            id: 3,
            name: "helmet compatible",
            category: "Совместимый со шлемом"
        }
    ],
    styles: [
        {
            id: 10,
            name: "Женские",
            style: "LADY’s",
            class: "ladys-s",
            classSpan: "ladys"
        },
        {
            id: 11,
            name: "Унисекс",
            style: "UNISEX",
            class: "unisex-s",
            classSpan: "unisex"
        },
        {
            id: 12,
            name: "Детские",
            style: "KIDS",
            class: "kids-s",
            classSpan: "kids"
        },
        {
            id: 13,
            name: "Подростковые",
            style: "TENN’s",
            class: "tenns-s",
            classSpan: "tenns"
        }
    ]
}

defineProps({
    all: {
        type: Boolean,
        default: false,
    }
})

import FilterPrice from "@/components/FilterPrice.vue";
</script>

<template>
    <div class="filters__wrap">
        <h4 class="filter__title filt-bg">Фильтры <span class="filter__close"></span></h4>

        <template v-if="all">
            <h5 class="filter__title">функционал</h5>
            <div class="check__block">
                <FilterCheckboxCategory v-for="item in DATA_FILTER.categorys" :key="item.id" :id="item.id" :name="item.name"
                    :category="item.category" />
            </div>

            <h5 class="filter__title">Стиль</h5>
            <div class="check__block">
                <FilterCheckboxStyle v-for="item in DATA_FILTER.styles" :key="item.id" :id="item.id" :name="item.name"
                    :style="item.style" :class="item.class" :classSpan="item.classSpan" />
            </div>
        </template>

        <h5 class="filter__title">Цена</h5>
        <div class="check__block">
            <FilterPrice />
        </div>

        <slot></slot>
    </div>
</template>