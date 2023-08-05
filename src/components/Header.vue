<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__row">
                <RouterLink to="/" class="logo">
                    <img src="/src/assets/img/Logo.svg" alt="" class="img-logo">
                </RouterLink>
                <div class="header__search">
                    <input class="header__input" type="text" placeholder="поиск">
                    <button class="header__search-btn"></button>
                </div>
                <div class="header__contact">
                    <a href="tel:8(450) 111 11 11" class="header__phone">8 (450) 111 11 11</a>
                    <div class="header__social">
                        <a href="https://web.telegram.org/k/" target="_blank" class="icon-social telegram">
                            <svg class="icon">
                                <use xlink:href="/src/assets/img/svg/sprite.svg#telegram"></use>
                            </svg>
                        </a>
                        <a href="https://www.whatsapp.com/?lang=ru_RU" target="_blank" class="icon-social whatsapp">
                            <svg class="icon">
                                <use xlink:href="/src/assets/img/svg/sprite.svg#whatsapp"></use>
                            </svg>
                        </a>
                        <a href="https://www.skype.com/ru/" target="_blank" class="icon-social skype">
                            <svg class="icon">
                                <use xlink:href="/src/assets/img/svg/sprite.svg#skype"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="like-basket__block">
                    <div class="menu__btn"><span></span></div>
                    <RouterLink to="/basked" class="icon__like">
                        <span class="like__counter counter">0</span>
                    </RouterLink>
                    <div class="basket__block">
                        <RouterLink to="/basked" class="icon__basket">
                            <span class="basket__counter counter">1</span>
                        </RouterLink>
                        <span class="basket__text">В корзине<span class="light-red"> 2000 </span>р.</span>
                    </div>
                </div>
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
                                        <svg class="icon">
                                            <use xlink:href="/src/assets/img/svg/sprite.svg#arrow-link"></use>
                                        </svg>
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
                                        <svg class="icon">
                                            <use xlink:href="/src/assets/img/svg/sprite.svg#arrow-link"></use>
                                        </svg>
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
                    <div class="like-basket__block">
                        <RouterLink to="/basked" class="menu__link">
                            <span class="like__counter counter">0</span>
                        </RouterLink>
                        <div class="basket__block">
                            <RouterLink to="/basked" class="icon__basket">
                                <span class="basket__counter counter">1</span>
                            </RouterLink>
                            <span class="basket__text">В корзине<span class="light-red"> 2000 </span>р.</span>
                        </div>
                    </div>
                    <div class="header__contact">
                        <a href="tel:8(450)1111111" class="header__phone">8 (450) 111 11 11</a>
                        <div class="header__social">
                            <a href="https://web.telegram.org/k/" target="_blank" class="icon-social telegram">
                                <svg class="icon">
                                    <use xlink:href="/src/assets/img/svg/sprite.svg#telegram"></use>
                                </svg>
                            </a>
                            <a href="https://www.whatsapp.com/?lang=ru_RU" target="_blank" class="icon-social whatsapp">
                                <svg class="icon">
                                    <use xlink:href="/src/assets/img/svg/sprite.svg#whatsapp"></use>
                                </svg>
                            </a>
                            <a href="https://www.skype.com/ru/" target="_blank" class="icon-social skype">
                                <svg class="icon">
                                    <use xlink:href="/src/assets/img/svg/sprite.svg#skype"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>