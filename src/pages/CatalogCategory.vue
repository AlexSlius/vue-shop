<script setup>
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { watch, ref, onMounted, onBeforeMount } from "vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SortCount from "@/components/SortCount.vue";
import Filter from "@/components/Filter.vue";
import FilterImg from "@/components/FilterImg.vue";
import PageImg from "@/components/PageImg.vue";
import CatalogTextGroup from "@/components/CatalogTextGroup.vue";
import CardProduct from "@/components/CardProduct.vue";

import { useProductsStore } from "@/stores/products";
import { useSort } from "@/stores/sort";
import { useBaskedStore } from "@/stores/baskeds";
import { useFilterStore } from "@/stores/filter";

import dataPage from "@/dataPages/dataPageCatalogCategory.json";

const route = useRoute();
const products = ref();

const store = useProductsStore();
const storeSort = useSort();
const storeBasked = useBaskedStore();
const storeFilter = useFilterStore();

let pageD = dataPage[route.params?.id];

const handleSenByPrice = ({ category }) => {
    products.value = store.getProdunctsByFilterAndSorting({ sort: storeSort.sort, filter: storeFilter.filter, category });
}

const hande = () => {
    handleSenByPrice({ category: route.params?.id });
}

watch(
    () => [storeSort.sort.type],
    (type) => {
        handleSenByPrice({ category: route.params?.id })
    }
);

onBeforeMount(() => {
    storeSort.defaultSort();
    storeFilter.defaultFilter();
});

onMounted(() => {
    handleSenByPrice({ category: route.params?.id });
});

// слідкуємо за зміною динамічного шляху
onBeforeRouteUpdate((to, from, next) => {
    pageD = dataPage[to.params?.id];
    handleSenByPrice({ category: to.params?.id });
    next();
})
</script>

<template>
    <PageImg />
    <BreadCrumbs :currentPage="pageD.bradCrumb" :intermediate="[{ page: 'Каталог', path: '/catalog' }]" />
    <CatalogTextGroup :pageTitle="pageD.h1" :content="pageD.des" />
    <div class="filter-product__wrapp">
        <div class="container ">
            <div class="filter-product__row">
                <Filter :all="true" :handleSenByPrice="hande">
                    <FilterImg :data="[{ path: '#', scrimg: '/src/assets/img/filter-2.png', name: 'Спортивные' }]" />
                </Filter>
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