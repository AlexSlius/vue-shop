<script setup>
import { watchEffect, ref } from "vue";
import { RouterLink } from "vue-router";

import { useBaskedStore } from "@/stores/baskeds";
import { useLikeProduct } from "@/stores/likeProduct";

const props = defineProps({
    data: Object,
    handleAddBasked: Function
})

const inTheBasked = ref(false);
const inTheLink = ref(false);
const store = useBaskedStore();
const {
    addLike,
    removeLink,
    getProductInLink
} = useLikeProduct();

const handleLink = () => {
    inTheLink.value ? removeLink(props.data) : addLike(props.data);
}

watchEffect(() => {
    inTheBasked.value = store.getProductInTheBasked(props.data.id);
    inTheLink.value = getProductInLink(props.data.id);
});
</script>

<template>
    <div class="__item">
        <div class="like-hit__row">
            <button class="like" :class="{ 'hover': inTheLink }" @click.even="handleLink"></button>
            <div class="hit__group" v-if="data.tags?.length > 0">
                <RouterLink to="#" :class="itemTag.class" v-for="itemTag in data.tags" :key="itemTag.id">{{ itemTag.name }}
                </RouterLink>
            </div>
        </div>
        <RouterLink :to="`/card/${data.id}`" class="product__img">
            <img :src="data.photo" :alt="data.alt">
        </RouterLink>
        <RouterLink :to="`/card/${data.id}`" class="product__name">{{ data.model }}</RouterLink>
        <p class="product__subname">{{ data.name }}</p>
        <p class="product__last-prise">{{ data.priceLast }} р.</p>
        <p class="product__prise">{{ data.price }} р.</p>
        <button class="btn red" :class="{ btn_active: inTheBasked }" @click.even="handleAddBasked(data)">{{ inTheBasked ? `В
            корзині` : `В корзину` }}</button>
    </div>
</template>