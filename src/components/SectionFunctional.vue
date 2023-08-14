<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <sectinon class="functional">
        <div class="container cnt">
            <div class="functional__wrapp">
                <h1 class="page__title">функционал</h1>
                <div class="functional__inner">
                    <div class="functional__column">
                        <RouterLink to="/info-sport" class="functional__big fb-1">
                            <img src="/src/assets/img/functional-1.png" alt="">
                            <span class="fname">Спортивные</span>
                            <span class="details">подробнее>></span>
                        </RouterLink>
                        <RouterLink to="/yey-protection" class="functional__small fb-2">
                            <img src="/src/assets/img/functional-2.png" alt="">
                            <span class="fname">защита для глаз</span>
                            <span class="details">подробнее>></span>
                        </RouterLink>
                    </div>
                    <div class="functional__column">
                        <RouterLink to="/yey-care" class="functional__small fb-3">
                            <img src="/src/assets/img/functional-3.png" alt="">
                            <span class="fname">УХОД ЗА ГЛАЗАМИ</span>
                            <span class="details">подробнее>></span>
                        </RouterLink>
                        <RouterLink to="/info-sun" class="functional__big fb-4">
                            <img src="/src/assets/img/functional-4.png" alt="">
                            <span class="fname">Солнцезащитные</span>
                            <span class="details">подробнее>></span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </sectinon>
</template>