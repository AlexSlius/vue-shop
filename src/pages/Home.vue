<script setup>
import SliderMain from "@/components/SliderMain.vue";
import SectionCategorys from "@/components/SectionCategorys.vue";
import SectionProducts from "@/components/SectionProducts.vue";
import SectionFunctional from "@/components/SectionFunctional.vue";
import SectionNews from "@/components/SectionNews.vue";
import SectionAbout from "@/components/SectionAbout.vue";

import { useProductsStore } from "@/stores/products";

const store = useProductsStore();
</script>

<template>
    <SliderMain />
    <SectionCategorys :dataProducts="store.products" />
    <SectionProducts :title="'популярное'" :dataProducts="store.products" />
    <SectionProducts :title="'Аксессуары'" :dataProducts="store.products" />
    <SectionFunctional />
    <SectionNews />
    <SectionAbout />
</template>
