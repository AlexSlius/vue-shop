<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SectionRecent from "@/components/SectionRecent.vue";
import SectionAccessories from "@/components/SectionAccessories.vue";
import SectionCardTabs from "@/components/SectionCardTabs.vue";
import SectionCardItem from "@/components/SectionCardItem.vue";

import { useViewedStore } from "@/stores/viewed";
import { useProductsStore } from "@/stores/products";

import dataCategorys from "@/dataPages/categorys.json";

const productData = ref();
const category = ref();

const route = useRoute();
const {
    addViewed,
    viewed
} = useViewedStore();
const {
    getProductById,
    getPropductsInQuantity,
    getProductOneById
} = useProductsStore();

const updateCategory = () => {
    category.value = dataCategorys.find((el) => el.key == productData.value.category);
}

const updateProduct = (id) => {
    productData.value = getProductOneById(id);
}

onBeforeRouteUpdate((to) => {
    let idCard = to.params?.id;
    addViewed(Number(idCard));
    updateProduct(idCard);
});

onMounted(() => {
    let idCard = route.params?.id;
    addViewed(Number(idCard));
    updateProduct(idCard);
});

watch(
    () => productData,
    () => {
        updateCategory();
    },
    { deep: true }
)
</script>

<template>
    <BreadCrumbs :currentPage="productData?.name || ''"
        :intermediate="[{ page: category?.name, path: `/catalog/${category?.key}` }]" />
    <SectionCardItem :dataProduct="productData" />
    <SectionCardTabs />
    <SectionAccessories :dataProducts=" getPropductsInQuantity(6)" />
    <SectionRecent :dataProducts="getProductById({ ids: viewed.ids, currentIdPage: route.params?.id })" />
</template>