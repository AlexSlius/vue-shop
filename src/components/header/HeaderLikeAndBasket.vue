<script setup>
import { RouterLink } from "vue-router";

defineProps({
    price: Number,
    quantity: Number
})
</script>

<template>
    <div class="like-basket__block">
        <div class="menu__btn"><span></span></div>
        <RouterLink to="#" class="icon__like">
            <span class="like__counter counter">0</span>
        </RouterLink>
        <div class="basket__block">
            <RouterLink to="/basked" class="icon__basket">
                <span class="basket__counter counter">{{ quantity }}</span>
            </RouterLink>
            <span class="basket__text">В корзине <span class="light-red"> {{ price }} </span> р.</span>
        </div>
    </div>
</template>