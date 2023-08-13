<script setup>
import SliderMain from "@/components/SliderMain.vue";
import SectionCategorys from "@/components/SectionCategorys.vue";
import SectionProducts from "@/components/SectionProducts.vue";
</script>

<template>
    <SliderMain />
    <SectionCategorys />
    <SectionProducts :title="'популярное'" />
    <SectionProducts :title="'Аксессуары'" />

    <sectinon class="functional">
        <div class="container cnt">
            <div class="functional__wrapp">
                <h1 class="page__title">функционал</h1>
                <div class="functional__inner">
                    <div class="functional__column">
                        <a href="#" class="functional__big fb-1">
                            <img src="/src/assets/img/functional-1.png" alt="">
                            <span class="fname">Спортивные</span>
                            <span class="details">подробнее>></span>
                        </a>
                        <a href="#" class="functional__small fb-2">
                            <img src="/src/assets/img/functional-2.png" alt="">
                            <span class="fname">защита для глаз</span>
                            <span class="details">подробнее>></span>
                        </a>
                    </div>
                    <div class="functional__column">
                        <a href="#" class="functional__small fb-3">
                            <img src="/src/assets/img/functional-3.png" alt="">
                            <span class="fname">УХОД ЗА ГЛАЗАМИ</span>
                            <span class="details">подробнее>></span>
                        </a>
                        <a href="#" class="functional__big fb-4">
                            <img src="/src/assets/img/functional-4.png" alt="">
                            <span class="fname">Солнцезащитные</span>
                            <span class="details">подробнее>></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </sectinon>
    <sectinon class="news">
        <div class="container cnt">
            <div class="news__wrapp">
                <h1 class="page__title">Новости</h1>
                <div class="slider__news">

                    <a href="#" class="slider__new">
                        <img src="/src/assets/img/new-1.png" alt="">
                        <span class="snew-block">
                            <spna class="snew-title">Открытие горнолыжного сезона</spna>
                            <spna class="snew-date">01.12.20</spna>
                        </span>
                    </a>

                    <a href="#" class="slider__new">
                        <img src="/src/assets/img/new-2.png" alt="">
                        <span class="snew-block">
                            <spna class="snew-title">Каталог 2020-2021</spna>
                            <spna class="snew-date">15.12.20</spna>
                        </span>
                    </a>

                    <a href="#" class="slider__new">
                        <img src="/src/assets/img/new-3.png" alt="">
                        <span class="snew-block">
                            <spna class="snew-title">Открытие магазина</spna>
                            <spna class="snew-date">11.12.20</spna>
                        </span>
                    </a>

                    <a href="#" class="slider__new">
                        <img src="/src/assets/img/new-2.png" alt="">
                        <span class="snew-block">
                            <spna class="snew-title">Каталог 2020-2021</spna>
                            <spna class="snew-date">21.11.20</spna>
                        </span>
                    </a>


                </div>
            </div>
        </div>
    </sectinon>
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

                    <div class="about__elem">
                        <a href="#" class="">
                            <img src="/src/assets/img/about-1.png" alt="">
                        </a>
                        <a href="#" class="">Скачать>></a>
                    </div>


                    <div class="about__elem">
                        <a href="#" class="">
                            <img src="/src/assets/img/about-2.png" alt="">
                        </a>
                        <a href="#" class="">Скачать>></a>
                    </div>

                    <div class="about__elem">
                        <a href="#" class="">
                            <img src="/src/assets/img/about-3.png" alt="">
                        </a>
                        <a href="#" class="">Скачать>></a>
                    </div>

                    <div class="about__elem">
                        <a href="#" class="">
                            <img src="/src/assets/img/about-2.png" alt="">
                        </a>
                        <a href="#" class="">Скачать>></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
