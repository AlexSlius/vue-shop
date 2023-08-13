<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import CardProduct from "@/components/CardProduct.vue";

defineProps({
    title: String
});

</script>

<template>
    <section class="popular">
        <div class="container cnt">
            <h1 class="page__title">{{ title }}</h1>
            <div class="slider__product">
                <Swiper :slides-per-view="4" :space-between="30" :navigation="true" :modules="[Navigation]">
                    <SwiperSlide>
                        <CardProduct />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>