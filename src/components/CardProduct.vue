<script setup>
import { RouterLink } from "vue-router";

defineProps({
    data: Object,
    handleAddBasked: Function
})
</script>

<template>
    <div class="__item">
        <div class="like-hit__row">
            <button class="like"></button>
            <div class="hit__group" v-if="data.tags?.length > 0">
                <RouterLink to="#" :class="itemTag.class" v-for="itemTag in data.tags" :key="itemTag.id">{{ itemTag.name }}</RouterLink>
            </div>
        </div>
        <RouterLink :to="`/card/${id}`" class="product__img">
            <img :src="data.photo" :alt="data.alt">
        </RouterLink>
        <RouterLink :to="`/card/${data.id}`" class="product__name">{{ data.model }}</RouterLink>
        <p class="product__subname">{{ data.name }}</p>
        <p class="product__last-prise">{{ data.priceLast }} р.</p>
        <p class="product__prise">{{ data.price }} р.</p>
        <button class="btn red" @click.even="handleAddBasked(data)">В корзину</button>
    </div>
</template>