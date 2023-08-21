<script setup>
import { RouterLink } from "vue-router";

defineProps({
    data: Object,
    delet: Function,
    handleQuantityMinus: Function,
    handlePlus: Function
});
</script>

<template>
    <div class="basket__wrapp-card">
        <div class="basket__column-left">
            <div class="basket__img-block">
                <div class="basket__img-inner">
                    <RouterLink :to="`/card/${data.id}`">
                        <img class="basket__img" :src="data.photo" :alt="data.alt">
                    </RouterLink>
                </div>
                <span class="basket__img-delete" @click.even="delet(data.id)">Удалить</span>
            </div>
            <div class="basket__name-block">
                <p class="basket__name">
                    <RouterLink :to="`/card/${data.id}`">
                        {{ data.model }}
                    </RouterLink>
                </p>
                <p class="basket__subname">
                    <RouterLink :to="`/card/${data.id}`">
                        {{ data.name }}
                    </RouterLink>
                </p>
            </div>
        </div>
        <div class="basket__column-right">
            <div class="basket___one-block">
                <p class="basket__column-name">Цена</p>
                <p class="basket__price-one">{{ data.price }} р.</p>
            </div>
            <div class="basket___count-block">
                <p class="basket__column-name">Количество</p>
                <div class="basket__count-inner">
                    <button class="count-btn minus" @click.even="handleQuantityMinus(data.id)">-</button>
                    <input type="number" class="basket__count" :value="data.quantity">
                    <button class="count-btn plus" @click.even="handlePlus(data.id)">+</button>
                </div>
            </div>
            <div class="basket___sum-block">
                <p class="basket__column-name">Цена</p>
                <p class="basket__price-sum">{{ data.quantity * data.price }} р.</p>
            </div>
        </div>
    </div>
</template>