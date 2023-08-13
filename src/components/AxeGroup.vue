<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import AxeBlock from "@/components/AxeBlock.vue";
import CardProduct from "@/components/CardProduct.vue";

let show = ref(false);

const handleShow = () => {
    show.value = !show.value;
}

</script>

<template>
    <div class="axe-group">
        <AxeBlock :handleShow="handleShow" :show="show" />
        <div class="slider__product" v-if="show" :class="{ 'slider__product-on': show }">
            <Swiper :slides-per-view="4" :space-between="30" :navigation="true" :modules="[Navigation]">
                <SwiperSlide>
                    <CardProduct />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>