<script setup>
import CardProduct from "@/components/CardProduct.vue";

import { useBaskedStore } from "@/stores/baskeds"

defineProps({
    dataProducts: Array
});

const store = useBaskedStore();
</script>

<template>
    <section class="recent" v-if="dataProducts?.length > 0">
        <div class="container cnt">
            <h1 class="page__title mt-100">Вы недавно смотрели</h1>
            <div class="recent__block">
                <CardProduct v-for="item in dataProducts" :data="item" :key="item.id" :handleAddBasked="store.addProduct" />
            </div>
        </div>
    </section>
</template>