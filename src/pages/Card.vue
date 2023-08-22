<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SectionRecent from "@/components/SectionRecent.vue";
import SectionAccessories from "@/components/SectionAccessories.vue";
import SectionCardTabs from "@/components/SectionCardTabs.vue";
import SectionCardItem from "@/components/SectionCardItem.vue";
import ModalOrderInOneClick from "@/components/modals/ModalOrderInOneClick.vue";

import { useViewedStore } from "@/stores/viewed";
import { useProductsStore } from "@/stores/products";
import { useBaskedStore } from "@/stores/baskeds";

import dataCategorys from "@/dataPages/categorys.json";

const productData = ref();
const category = ref();
const inTheBasked = ref(false);
const selectColor = ref(null);
const showModal = ref(false);

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
const {
    baskedProducts,
    addProduct,
    getProductInTheBasked
} = useBaskedStore();

const updateCategory = () => {
    category.value = dataCategorys.find((el) => el.key == productData.value.category);
}

const updateProduct = (id) => {
    productData.value = getProductOneById(id);
}

const inTheBas = () => {
    inTheBasked.value = getProductInTheBasked(route.params?.id);
}

const handleSelectColor = ({ value, def = false }) => {
    if (!!def) {
        selectColor.value = productData.value?.colors?.[0];
        return;
    }

    selectColor.value = value;
}

const handleCloseModal = () => {
    showModal.value = false;
}

const openModal = () => {
    showModal.value = true;
}

onBeforeRouteUpdate((to) => {
    let idCard = to.params?.id;
    addViewed(Number(idCard));
    updateProduct(idCard);
    inTheBas();
});

onMounted(() => {
    let idCard = route.params?.id;
    addViewed(Number(idCard));
    updateProduct(idCard);
    inTheBas();
});

watch(
    () => productData,
    () => {
        updateCategory();
        handleSelectColor({ def: true });
    },
    { deep: true }
)

watch(
    () => baskedProducts,
    () => {
        inTheBas();
    },
    { deep: true }
)
</script>

<template>
    <BreadCrumbs :currentPage="productData?.name || ''"
        :intermediate="[{ page: category?.name, path: `/catalog/${category?.key}` }]" />
    <SectionCardItem :dataProduct="productData" :addProduct="addProduct" :inTheBasked="inTheBasked"
        :selectColor="selectColor" :handleSelectColor="handleSelectColor" :openModal="openModal" />
    <SectionCardTabs />
    <SectionAccessories :dataProducts="getPropductsInQuantity(6)" />
    <SectionRecent :dataProducts="getProductById({ ids: viewed.ids, currentIdPage: route.params?.id })" />

    <ModalOrderInOneClick :show="showModal" :handleCloseModal="handleCloseModal"
        :name="`${productData?.name} - ${productData?.model}`" />
</template>