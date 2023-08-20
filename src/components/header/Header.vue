<script setup>
import { reactive } from "vue";
import { RouterLink, useRouter } from 'vue-router';

import HeaderContact from "./HeaderContact.vue";
import HeaderLikeAndBasket from "./HeaderLikeAndBasket.vue";
import HeaderSearch from "./HeaderSearch.vue";
import IconSprite from "@/components/IconSprite.vue";

import { useBaskedStore } from "../../stores/baskeds";
import { useLikeProduct } from "../../stores/likeProduct";

const router = useRouter();
const store = useBaskedStore();
const {  likeProducts } = useLikeProduct();

const dataSearch = reactive({ value: '' });

const handleSearchInput = (e) => {
    dataSearch.value = e.target.value;
}

const handleNextSearch = () => {
    if (dataSearch.value.length > 0) {
        router.push({ name: 'pageSearch', query: { searchText: dataSearch.value } });
        dataSearch.value = '';
    }
}

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__row">
                <RouterLink to="/" class="logo">
                    <img src="/src/assets/img/Logo.svg" alt="" class="img-logo">
                </RouterLink>
                <HeaderSearch :value="dataSearch.value" :handleInput="handleSearchInput"
                    :handleNextSearch="handleNextSearch" />
                <HeaderContact />
                <HeaderLikeAndBasket :quantity="store.getlengthAll" :price="store.getPriceAll"
                    :quantityLike="likeProducts.length" />
            </div>
        </div>
        <div class="menu__wrapp">
            <div class="container">
                <div class="menu__row">
                    <nav class="menu">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <RouterLink to="/" class="menu__link">Главная</RouterLink>
                            </li>
                            <li class="menu__item">
                                <span>
                                    <RouterLink to="/catalog" class="menu__link"><span class="ml_burger"> </span>Каталог
                                    </RouterLink>
                                    <span class="ml_arrow ml_arrow-b">
                                        <IconSprite :tag="'arrow-link'" />
                                    </span>
                                </span>
                                <ul class="menu__list drop__list drop__list-l">
                                    <li class="menu__item">
                                        <RouterLink to="/catalog/sport" class="menu__link">Спортивные</RouterLink>
                                    </li>
                                    <li class="menu__item">
                                        <RouterLink to="/catalog/eye" class="menu__link">Уход за глазами</RouterLink>
                                    </li>
                                    <li class="menu__item">
                                        <RouterLink to="/catalog/sun" class="menu__link">Защита для глаз</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu__item">
                                <span>
                                    <RouterLink to="/info-sun" class="menu__link">Назначение</RouterLink>
                                    <span class="ml_arrow">
                                        <IconSprite :tag="'arrow-link'" />
                                    </span>
                                </span>
                                <ul class="menu__list drop__list">
                                    <li class="menu__item">
                                        <RouterLink to="/info-sun" class="menu__link">Солнцезащитные очки</RouterLink>
                                    </li>
                                    <li class="menu__item">
                                        <RouterLink to="/info-sport" class="menu__link">Спортивные</RouterLink>
                                    </li>
                                    <li class="menu__item">
                                        <RouterLink to="/yey-care" class="menu__link">Уход за глазами</RouterLink>
                                    </li>
                                    <li class="menu__item">
                                        <RouterLink to="/yey-protection" class="menu__link">Защита для глаз</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu__item">
                                <RouterLink to="/about" class="menu__link">О компании</RouterLink>
                            </li>
                            <li class="menu__item">
                                <RouterLink to="/news" class="menu__link">Новости</RouterLink>
                            </li>
                            <li class="menu__item">
                                <RouterLink to="/contact" class="menu__link">Контакты</RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <HeaderLikeAndBasket :quantity="store.getlengthAll" :price="store.getPriceAll"
                        :quantityLike="likeProducts.length" />
                    <HeaderContact />
                </div>
            </div>
        </div>
    </header>
</template>