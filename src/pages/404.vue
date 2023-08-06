<script setup>
import router from '@/router';

const handleBack = () => {
    router.back(-1);
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="page-404__inner">
                <div class="center__404">
                    <img src="/src/assets/img/404.png" alt="image">
                </div>
                <h3 class="page-404__title">Ой... Мы не можем найти эту страницу!</h3>
                <p class="page-404__subtitle">Мы сожалеем, но страница на которую Вы пытались перейти не существует.
                </p>
                <p class="page-404__subtitle">Пожалуйста вернитесь на предыдущую страницу или воспользуйтесь меню сайта.</p>
                <button class="page-404__link btn" type="button" @click="handleBack">Предыдущая страница</button>
            </div>
        </div>
    </div>
</template>