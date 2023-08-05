<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer">
        <div class="footer__wrapp">
            <div class="container">
                <div class="footer__row">
                    <div class="footer__block">
                        <RouterLink to="/" class="footer-logo">
                            <img src="/src/assets/img/Logo-w.svg" alt="img logo" class="img-logo">
                        </RouterLink>
                        <div class="footer__social">
                            <a href="https://m.vk.com/" class="icon-social vk" target="_blank">
                                <svg class="icon">
                                    <use xlink:href="/src/assets/img/svg/sprite.svg#vk"></use>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/" class="icon-social instagram" target="_blank">
                                <svg class="icon">
                                    <use xlink:href="/src/assets/img/svg/sprite.svg#instagram"></use>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/?hl=ru&gl=UA" class="icon-social youtube" target="_blank">
                                <svg class="icon">
                                    <use xlink:href="/src/assets/img/svg/sprite.svg#youtube"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer__column flex-grow">
                        <h5 class="footer__title">Информация</h5>
                        <ul class="footer__info">
                            <li class="info__item">
                                <RouterLink to="/" class="info__link">Главная</RouterLink>
                            </li>
                            <li class="info__item">
                                <RouterLink to="/about" class="info__link">О компании</RouterLink>
                            </li>
                            <li class="info__item">
                                <RouterLink to="/news" class="info__link">Новости</RouterLink>
                            </li>
                            <li class="info__item">
                                <RouterLink to="/contact" class="info__link">Контакты</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__column mr">
                        <h5 class="footer__title">Каталог</h5>
                        <ul class="footer__info">
                            <li class="info__item">
                                <RouterLink to="/catalog/sun" class="info__link">Солнцезащитные очки</RouterLink>
                            </li>
                            <li class="info__item">
                                <RouterLink to="/catalog/sport" class="info__link">Спортивные</RouterLink>
                            </li>
                            <li class="info__item">
                                <RouterLink to="/catalog/eye" class="info__link">Уход за глазами</RouterLink>
                            </li>
                            <li class="info__item">
                                <RouterLink to="/catalog" class="info__link">Аксессуары</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__input-block">
                        <a href="tel:8(450) 111 11 11" class="footer__phone">8(450) 111 11 11</a>
                        <p class="footer__text">Подпишитесь! Новинки, скидки, предложения! </p>
                        <form action="#" method="get">
                            <input class="footer__input" type="email" placeholder="Введите Ваш e-mail">
                            <button class="footer__submit">Отправить</button>
                        </form>
                    </div>
                    <span class="bg-center">1936</span>
                </div>
            </div>
        </div>
        <div class="footer__agreement">
            <RouterLink to="#" class="link__agreement">Пользовательское соглашение</RouterLink>
            <RouterLink to="#" class="link__agreement">Оферта</RouterLink>
            <RouterLink to="#" class="link__agreement">Copyright 2021 AXE. All Right Reserved</RouterLink>
        </div>
    </footer>

    <div class="scroll-up js-scroll-up">
        <svg class="scroll-up__svg" viewBox="-2 -2 52 52">
            <path class="scroll-up__path js-scroll-up__path" d="M24,0 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48" />
        </svg>
    </div>
</template>