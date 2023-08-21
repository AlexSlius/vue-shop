<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import "swiper/css/thumbs"

let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}
</script>

<template>
    <div class="card__item__block-img">
        <div class="slider-for">
            <Swiper :slides-per-view="1" :navigation="true" :modules="[Navigation, Thumbs, FreeMode]" :loop="true"
                :thumbs="{ swiper: thumbsSwiper }">
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-1.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="card__item-slider-wrapp ">
            <Swiper :slides-per-view="3" :modules="[Thumbs, FreeMode]" :direction="'vertical'" :space-between="20"
                :loop="true" @swiper="setThumbsSwiper" :watchSlidesProgress="true">
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-1.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slider-for__element">
                        <img src="/src/assets/img/card__item/color-2.png" alt="img">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>