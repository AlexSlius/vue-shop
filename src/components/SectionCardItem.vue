<script setup>
import CardProductImg from "@/components/CardProductImg.vue";
import CardBlockIconProd from "@/components/CardBlockIconProd.vue";
import CardProdTable from "@/components/CardProdTable.vue";

defineProps({
    dataProduct: Object,
    addProduct: Function,
    inTheBasked: Boolean,
    handleSelectColor: Function,
    selectColor: [Object, null],
    openModal: Function
});
</script>

<template>
    <section class="card__item-sctn">
        <div class="container">
            <div class="card__item-wrapp">
                <div class="card__item-row">
                    <div class="card__item-column-l">
                        <CardProductImg />
                        <CardBlockIconProd />
                    </div>
                    <div class="card__item-column-r">
                        <div class="card-item-column-r__inner">
                            <div class="card__item__title-block">
                                <h1 class="card__item-title">{{ dataProduct?.model }}</h1>
                                <template v-if="dataProduct?.forWhom?.length > 0">
                                    <span v-for="item in dataProduct?.forWhom" :key="item.id" :class="item.class">{{
                                        item.name }}</span>
                                </template>
                            </div>
                            <div class="card__item-price_btn">
                                <p class="card__item-subtitle">{{ dataProduct?.name }}</p>
                                <div class="card__item__color-block">
                                    <p class="card__item__color-text">Цвет</p>
                                    <div class="card__item__color__img-block" v-if="dataProduct?.colors?.length > 0">
                                        <div class="card__item__color__img"
                                            :class="{ 'color-active': selectColor?.id == item.id }"
                                            v-for="item in dataProduct?.colors" :key="item.id"
                                            @click="handleSelectColor({ value: item })">
                                            <img :src="item.img" alt="img color">
                                        </div>
                                    </div>
                                </div>
                                <div class="card__item__price-block">
                                    <p class="card__item__price">{{ dataProduct?.price }} р.</p>
                                    <p class="card__item__price-last">{{ dataProduct?.priceLast }} р.</p>
                                </div>
                                <p class="card__item__discount-text">Вы экономите {{ dataProduct?.priceLast || 0 -
                                    dataProduct?.price || 0 }} р.</p>
                                <div class="card__item__btn-block">
                                    <button class="card__item__btn btn bask-btn " :class="{ 'btn_active': inTheBasked }"
                                        @click="addProduct(dataProduct)">В корзину</button>
                                    <button class="card__item__btn btn one-btn" @click="openModal">Купить
                                        в один клик</button>
                                </div>
                            </div>
                            <CardProdTable :dataCharacteristic="dataProduct?.characteristic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>