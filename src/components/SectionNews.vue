<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

</script>


<template>
    <sectinon class="news">
        <div class="container cnt">
            <div class="news__wrapp">
                <h1 class="page__title">Новости</h1>
                <div class="slider__news">
                    <Swiper :slides-per-view="3" :space-between="30" :navigation="true" :modules="[Navigation]">

                        <SwiperSlide>
                            <a href="#" class="slider__new">
                                <img src="/src/assets/img/new-1.png" alt="">
                                <span class="snew-block">
                                    <spna class="snew-title">Открытие горнолыжного сезона</spna>
                                    <spna class="snew-date">01.12.20</spna>
                                </span>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" class="slider__new">
                                <img src="/src/assets/img/new-2.png" alt="">
                                <span class="snew-block">
                                    <spna class="snew-title">Каталог 2020-2021</spna>
                                    <spna class="snew-date">15.12.20</spna>
                                </span>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" class="slider__new">
                                <img src="/src/assets/img/new-3.png" alt="">
                                <span class="snew-block">
                                    <spna class="snew-title">Открытие магазина</spna>
                                    <spna class="snew-date">11.12.20</spna>
                                </span>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" class="slider__new">
                                <img src="/src/assets/img/new-2.png" alt="">
                                <span class="snew-block">
                                    <spna class="snew-title">Каталог 2020-2021</spna>
                                    <spna class="snew-date">21.11.20</spna>
                                </span>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </sectinon>
</template>