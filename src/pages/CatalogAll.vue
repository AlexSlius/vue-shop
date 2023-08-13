<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SortCount from "@/components/SortCount.vue";
import Filter from "@/components/Filter.vue";
import CardProduct from "@/components/CardProduct.vue";
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
                <Filter />
                <div class="products__wrap">
                    <SortCount />
                    <div class="products__inner">
                        <CardProduct />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>