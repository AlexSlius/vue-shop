<script setup>
import { watch, ref, onMounted, onBeforeMount } from "vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SortCount from "@/components/SortCount.vue";
import Filter from "@/components/Filter.vue";
import CardProduct from "@/components/CardProduct.vue";

import { useProductsStore } from "@/stores/products";
import { useSort } from "@/stores/sort";
import { useBaskedStore } from "@/stores/baskeds";
import { useFilterStore } from "@/stores/filter";

const products = ref();

const store = useProductsStore();
const storeSort = useSort();
const storeBasked = useBaskedStore();
const storeFilter = useFilterStore();

const handleSenByPrice = () => {
    products.value = store.getProdunctsByFilterAndSorting({ sort: storeSort.sort, filter: storeFilter.filter });
}

// слідкуємо за змінами сортування
watch(
    () => [storeSort.sort.type],
    (type) => {
        products.value = store.getProdunctsByFilterAndSorting({ sort: storeSort.sort, filter: storeFilter.filter });
    }
)

// до монтування компоненту
onBeforeMount(() => {
    storeSort.defaultSort();
    storeFilter.defaultFilter();
});

// відразу після монтування 
onMounted(() => {
    handleSenByPrice();
})
</script>

<template>
    <BreadCrumbs :currentPage="'Каталог'" />
    <div class="catalog__text-group">
        <div class="container">
            <h1 class="page__name">Аксессуары</h1>
        </div>
    </div>
    <div class="filter-product__wrapp">
        <div class="container ">
            <div class="filter-product__row">
                <Filter :handleSenByPrice="handleSenByPrice" />
                <div class="products__wrap">
                    <SortCount :quantity="products?.length || 0" :handleSelect="storeSort.updateSort"
                        :valueSelect="storeSort.sort" />
                    <div class="products__inner">
                        <CardProduct v-for="item in products" :key="item.id" :data="item"
                            :handleAddBasked="storeBasked.addProduct" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>