<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container cnt">
        <swiper :slides-per-view="1" :space-between="2" :pagination="{ clickable: true }" :modules="[Pagination]"
            :loop="true">
            <SwiperSlide>
                <div class="slider-inner">
                    <div class="slider__column-left">
                        <h1 class="slider__tile"><span>AEP-02 S</span></h1>
                        <h4 class="slider__subtitle">Очки</h4>
                        <p class="slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                        <RouterLink to="/catalog" class="slider__link">Каталог</RouterLink>
                    </div>
                    <div class="slider__column-right sbg-1">
                        <img class="slider-img " src="/src/assets/img/slider/slide-1.png" alt="img">
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="slider-inner">
                    <div class="slider__column-left">
                        <h1 class="slider__tile"><span>SG-480</span></h1>
                        <h4 class="slider__subtitle">Солнце защитные очки</h4>
                        <p class="slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                        <RouterLink to="/catalog/eye" class="slider__link">Каталог</RouterLink>
                    </div>
                    <div class="slider__column-right">
                        <img class="slider-img " src="/src/assets/img/slider/slide-3.png" alt="img">
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="slider-inner">
                    <div class="slider__column-left">
                        <h1 class="slider__tile"><span>Ax990-wcm</span></h1>
                        <h4 class="slider__subtitle">Маска горнолыжная</h4>
                        <p class="slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                        <RouterLink to="/catalog/sun" class="slider__link">Каталог</RouterLink>
                    </div>
                    <div class="slider__column-right">
                        <img class="slider-img " src="/src/assets/img/slider/slide-5.png" alt="img">
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
    </div>
</template>