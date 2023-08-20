<script setup>
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

import CardProduct from "@/components/CardProduct.vue";

import { useProductsStore } from "@/stores/products";
import { useBaskedStore } from "@/stores/baskeds";

const products = ref([]);
const route = useRoute();
const { getBySearch } = useProductsStore();
const { addProduct } = useBaskedStore();

onMounted(() => {
    products.value = getBySearch(route.query?.searchText);
});

onBeforeRouteUpdate((to) => {
    products.value = getBySearch(to.query?.searchText || '');
});

</script>

<template>
    <div class="container">
        <h3 t>{{ route.query?.searchText }}</h3>
        <div class="products__wrap products__wrap_like">
            <div class="products__inner">
                <template v-if="products?.length > 0">
                    <CardProduct v-for="item in products" :key="item.id" :data="item" :handleAddBasked="addProduct" />
                </template>
                <div class="div-empty" v-if="products?.length == 0">Пусто</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h3 {
    text-align: center;
    padding-bottom: 30px;
}
</style>