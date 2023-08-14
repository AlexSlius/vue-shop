<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import CardProduct from "@/components/CardProduct.vue";

import { useBaskedStore } from "@/stores/baskeds";

defineProps({
    title: String,
    dataProducts: Array
});

const store = useBaskedStore();
</script>

<template>
    <section class="popular">
        <div class="container cnt">
            <h1 class="page__title">{{ title }}</h1>
            <div class="slider__product">
                <Swiper :slides-per-view="4" :space-between="30" :navigation="true" :modules="[Navigation]">
                    <SwiperSlide v-for="item in dataProducts" :key="item.id">
                        <CardProduct :data="item" :handleAddBasked="store.addProduct"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>