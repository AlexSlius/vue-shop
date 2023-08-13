<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SelectSort from "@/components/SelectSort.vue";
import Filter from "@/components/Filter.vue";
import FilterImg from "@/components/FilterImg.vue";
import PageImg from "@/components/PageImg.vue";
import CatalogTextGroup from "@/components/CatalogTextGroup.vue";
import CardProduct from "@/components/CardProduct.vue";
</script>

<template>
    <PageImg />
    <BreadCrumbs :currentPage="'Спортивные очки'" :intermediate="[{ page: 'Каталог', path: '/catalog' }]" />
    <CatalogTextGroup />
    <div class="filter-product__wrapp">
        <div class="container ">
            <div class="filter-product__row">
                <Filter :all="true">
                    <FilterImg :data="[{ path: '#', scrimg: '/src/assets/img/filter-2.png', name: 'Спортивные' }]" />
                </Filter>
                <div class="products__wrap">
                    <div class="sort-count__block">
                        <div class="filter__btn btn">Фильтры</div>
                        <div class="sort-column">
                            <div class="sort-text"> Сортировать по:</div>
                            <SelectSort :value="'Популярности'" />
                        </div>
                        <div class="count-colum">Товаров:<span class="red">28</span></div>
                    </div>
                    <div class="products__inner">
                        <CardProduct />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>