<script setup>
import CardProductImg from "@/components/CardProductImg.vue";
import CardBlockIconProd from "@/components/CardBlockIconProd.vue";
import CardProdTable from "@/components/CardProdTable.vue";

defineProps({
    dataProduct: Object
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
                                <span class="man">MEN's</span>
                                <span class="new">NEW</span>
                            </div>
                            <div class="card__item-price_btn">
                                <p class="card__item-subtitle">{{ dataProduct?.name }}</p>
                                <div class="card__item__color-block">
                                    <p class="card__item__color-text">Цвет</p>
                                    <div class="card__item__color__img-block">
                                        <div class="card__item__color__img color-active">
                                            <img src="/src/assets/img/card__item/color-1.png" alt="">
                                        </div>
                                        <div class="card__item__color__img">
                                            <img src="/src/assets/img/card__item/color-2.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="card__item__price-block">
                                    <p class="card__item__price">{{ dataProduct?.price }} р.</p>
                                    <p class="card__item__price-last">{{ dataProduct?.priceLast }} р.</p>
                                </div>
                                <p class="card__item__discount-text">Вы экономите {{ dataProduct?.priceLast || 0  - dataProduct?.price || 0 }} р.</p>
                                <div class="card__item__btn-block">
                                    <button class="card__item__btn btn bask-btn" data-fancybox href="#fncbx-basket">В
                                        корзину</button>
                                    <button class="card__item__btn btn one-btn" data-fancybox href="#fncbx-one">Купить
                                        в один клик</button>
                                </div>
                            </div>
                            <CardProdTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>