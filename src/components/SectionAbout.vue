<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

</script>

<template>
    <section class="about">
        <div class="container cnt">
            <div class="about__block">
                <h1 class="page__title">О нас</h1>
                <h4 class="page__subtitle red">гОД ОСНОВАНИЯ 1936</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" class="more">Подробнее>></a>
                <div class="about__slider">
                    <Swiper :slides-per-view="3" :space-between="30" :navigation="true" :modules="[Navigation]">
                        <SwiperSlide>
                            <div class="about__elem">
                                <a href="#" class="">
                                    <img src="/src/assets/img/about-1.png" alt="">
                                </a>
                                <a href="#" class="">Скачать>></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="about__elem">
                                <a href="#" class="">
                                    <img src="/src/assets/img/about-2.png" alt="">
                                </a>
                                <a href="#" class="">Скачать>></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="about__elem">
                                <a href="#" class="">
                                    <img src="/src/assets/img/about-3.png" alt="">
                                </a>
                                <a href="#" class="">Скачать>></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="about__elem">
                                <a href="#" class="">
                                    <img src="/src/assets/img/about-2.png" alt="">
                                </a>
                                <a href="#" class="">Скачать>></a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>