<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
</script>

<template>
    <BreadCrumbs :currentPage="'Новости'" />
    <div class="container">
        <h1 class="page__name">Новости</h1>
        <div class="news-page__wrapp">
            <div class="news-banner__block">
                <h4 class="news-banner__title filt-bg">Акции </h4>
                <a href="#" class="banner__item">
                    <img src="/src/assets/img/card__item/basket-1.png" alt="">
                    <span>Подробнее>></span>
                </a>
                <a href="#" class="banner__item">
                    <img src="/src/assets/img/card__item/basket-3.png" alt="">
                    <span>Подробнее>></span>
                </a>
            </div>
            <div class="news-page__block">
                <div class="news-page__item">
                    <div class="news-page__img">
                        <a href="#"><img src="/src/assets/img/new-1.png" alt=""></a>
                    </div>
                    <div class="news-page__text-block">
                        <p class="news-page__date">01.12.20</p>
                        <a href="#" class="news-page__title">Открытие горнолыжного сезона</a>
                        <p class="news-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,...</p>
                        <a href="#" class="news-page__disc">Читать >></a>
                    </div>
                </div>
                <div class="news-page__item">
                    <div class="news-page__img">
                        <a href="#"><img src="/src/assets/img/new-2.png" alt=""></a>
                    </div>
                    <div class="news-page__text-block">
                        <p class="news-page__date">21.11.20</p>
                        <a href="#" class="news-page__title">Каталог 2020-2021</a>
                        <p class="news-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,...</p>
                        <a href="#" class="news-page__disc">Читать >></a>
                    </div>
                </div>
                <div class="news-page__item">
                    <div class="news-page__img">
                        <a href="#"><img src="/src/assets/img/new-3.png" alt=""></a>
                    </div>
                    <div class="news-page__text-block">
                        <p class="news-page__date">01.12.20</p>
                        <a href="#" class="news-page__title">Открытие магазина</a>
                        <p class="news-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,...</p>
                        <a href="#" class="news-page__disc">Читать >></a>
                    </div>
                </div>
                <div class="news-page__item">
                    <div class="news-page__img">
                        <a href="#"><img src="/src/assets/img/new-1.png" alt=""></a>
                    </div>
                    <div class="news-page__text-block">
                        <p class="news-page__date">01.12.20</p>
                        <a href="#" class="news-page__title">Открытие горнолыжного сезона</a>
                        <p class="news-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,...</p>
                        <a href="#" class="news-page__disc">Читать >></a>
                    </div>
                </div>
                <div class="news-page__item">
                    <div class="news-page__img">
                        <a href="#"><img src="/src/assets/img/new-2.png" alt=""></a>
                    </div>
                    <div class="news-page__text-block">
                        <p class="news-page__date">21.11.20</p>
                        <a href="#" class="news-page__title">Каталог 2020-2021</a>
                        <p class="news-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,...</p>
                        <a href="#" class="news-page__disc">Читать >></a>
                    </div>
                </div>
                <div class="news-page__item">
                    <div class="news-page__img">
                        <a href="#"><img src="/src/assets/img/new-3.png" alt=""></a>
                    </div>
                    <div class="news-page__text-block">
                        <p class="news-page__date">01.12.20</p>
                        <a href="#" class="news-page__title">Открытие магазина</a>
                        <p class="news-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,...</p>
                        <a href="#" class="news-page__disc">Читать >></a>
                    </div>
                </div>
                <div class="news-page__pagination-wrapp">
                    <a href="#" class="news-page__pagination-prev"></a>
                    <a href="#" class="news-page__pagination-item pagination-active">1</a>
                    <a href="#" class="news-page__pagination-item">2</a>
                    <a href="#" class="news-page__pagination-item">3</a>
                    <a href="#" class="news-page__pagination-item">4</a>
                    <a href="#" class="news-page__pagination-item">5</a>
                    <a href="#" class="news-page__pagination-item">...</a>
                    <a href="#" class="news-page__pagination-next"></a>
                </div>
            </div>
        </div>
    </div>
</template>