<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import CardProduct from "@/components/CardProduct.vue";

import { useBaskedStore } from "@/stores/baskeds";
import { useLikeProduct } from "@/stores/likeProduct";

const store = useLikeProduct();
const storeBasked = useBaskedStore();
</script>

<template>
    <BreadCrumbs :currentPage="'Обранні'" />
    <div class="catalog__text-group">
        <div class="container">
            <h1 class="page__name">Обранні</h1>
        </div>
    </div>
    <div class="filter-product__wrapp">
        <div class="container ">
            <div class="filter-product__row">
                <div class="products__wrap products__wrap_like">
                    <div class="products__inner">
                        <template v-if="store.likeProducts?.length > 0">
                            <CardProduct v-for="item in store.likeProducts" :key="item.id" :data="item"
                                :handleAddBasked="storeBasked.addProduct" />
                        </template>
                        <div class="div-empty" v-if="store.likeProducts?.length == 0">Пусто</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>