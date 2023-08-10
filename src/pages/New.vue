<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import NewsBanner from "@/components/NewsBanner.vue";
import CardNewBanerTypeTwo from "@/components/CardNewBanerTypeTwo.vue";
</script>

<template>
    <BreadCrumbs :currentPage="'Открытие горнолыжного сезона'" :intermediate="[{ page: 'Новости', path: '/news' }]" />
    <div class="container ">
        <h1 class="page__tile">Открытие горнолыжного сезона</h1>
        <div class="news-page__wrapp">
            <NewsBanner :title="'Новости'">
                <CardNewBanerTypeTwo :path="'#'" :scrImg="'/src/assets/img/new-2.png'" :label="'Открытие магазина'"
                    :date="'11.12.20'" />
                <CardNewBanerTypeTwo :path="'#'" :scrImg="'/src/assets/img/new-3.png'" :label="'Открытие магазина'"
                    :date="'11.12.20'" />
            </NewsBanner>
            <div class="news-page__block">
                <div class="new-item__wrapp">
                    <div class="new-item__main-img">
                        <img src="/src/assets/img/new-1-big.png" alt="">
                    </div>
                    <p class="new-item__main-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="new-item__main-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div class="new-item__inner">
                        <div class="new-item__text-inner">
                            <p class="new-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p class="new-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <img class="new-item__img" src="/src/assets/img/new_item-1.png" alt="">
                    </div>
                    <div class="new-item__inner reverse">
                        <div class="new-item__text-inner">
                            <p class="new-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <img class="new-item__img" src="/src/assets/img/new_item-2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>