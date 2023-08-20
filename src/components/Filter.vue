<script setup>
import FilterCheckboxCategory from "@/components/FilterCheckboxCategory.vue";
import FilterCheckboxStyle from "@/components/FilterCheckboxStyle.vue";
import FilterPrice from "@/components/FilterPrice.vue";

import { useFilterStore } from "@/stores/filter";

const DATA_FILTER = {
    categorys: [
        {
            id: 0,
            name: "polarized",
            category: "Поляризационны",
            key: "polarized"
        },
        {
            id: 1,
            name: "double lens",
            category: "Двойная линза",
            key: "doubleLens"
        },
        {
            id: 2,
            name: "fit over glass",
            category: "Укладываться на стекло",
            key: "fitOverGlass"
        },
        {
            id: 3,
            name: "helmet compatible",
            category: "Совместимый со шлемом",
            key: "helmetCompatible"
        }
    ],
    styles: [
        {
            id: 10,
            name: "Женские",
            style: "LADY’s",
            class: "ladys-s",
            classSpan: "ladys",
            key: "ladys"
        },
        {
            id: 11,
            name: "Унисекс",
            style: "UNISEX",
            class: "unisex-s",
            classSpan: "unisex",
            key: "unisex"
        },
        {
            id: 12,
            name: "Детские",
            style: "KIDS",
            class: "kids-s",
            classSpan: "kids",
            key: "kids"
        },
        {
            id: 13,
            name: "Подростковые",
            style: "TENN’s",
            class: "tenns-s",
            classSpan: "tenns",
            key: "tenns"
        }
    ]
}

defineProps({
    all: {
        type: Boolean,
        default: false,
    },
    handleSenByPrice: Function
});

const {
    filter: {
        price,
        functions,
        styles
    },
    updatePriceMin,
    updatePriceMax,
    handleRange,
    handleUpdateFunction,
    handleUpdateStyle
} = useFilterStore();

</script>

<template>
    <div class="filters__wrap">
        <h4 class="filter__title filt-bg">Фильтры <span class="filter__close"></span></h4>

        <template v-if="all">
            <h5 class="filter__title">функционал</h5>
            <div class="check__block">
                <FilterCheckboxCategory v-for="item in DATA_FILTER.categorys" :key="item.id" :keys="item.key" :id="item.id"
                    :name="item.name" :category="item.category" :handle="handleUpdateFunction"
                    :checked="functions.includes(item.key)" />
            </div>

            <h5 class="filter__title">Стиль</h5>
            <div class="check__block">
                <FilterCheckboxStyle v-for="item in DATA_FILTER.styles" :key="item.id" :id="item.id" :name="item.name"
                    :style="item.style" :class="item.class" :classSpan="item.classSpan" :keys="item.key"
                    :checked="styles.includes(item.key)" :handle="handleUpdateStyle" />
            </div>
        </template>

        <h5 class="filter__title">Цена</h5>
        <div class="check__block">
            <FilterPrice :valueMin="price.min" :valueMax="price.max" :handleOne="updatePriceMin" :handleTwo="updatePriceMax"
                :handleRange="handleRange" :handleSend="handleSenByPrice" />
        </div>

        <slot></slot>
    </div>
</template>