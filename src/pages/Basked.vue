<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import BaskedCard from "@/components/BasketCard.vue";

import { useBaskedStore } from "@/stores/baskeds";

const store = useBaskedStore();
</script>

<template>
    <BreadCrumbs :currentPage="'Корзина'" />
    <div class="container">
        <h1 class="page__name">Корзина</h1>
        <div v-if="store.baskedProducts?.length > 0">
            <BaskedCard v-for="item in store.baskedProducts" :key="item.id" :data="item" :delet="store.deleteProduct"
                :handleQuantityMinus="store.quantityMinus" :handlePlus="store.quantityPlus" />
            <div class="basket__wrapp-total">
                <div class="basket__wrapp-promo">
                    <div class="basket__promo-in">
                        <div class="text-in">Введите промокод</div>
                        <input class="promo-input" type="text" name="" id="">
                    </div>
                    <button class="basket__promo-btn">Применить</button>
                </div>
                <div class="basket__total">
                    <div class="basket__total-group">
                        <p class="basket__total-text">Товаров на суму:</p>
                        <p class="basket__total-text">Доставка:</p>
                        <p class="basket__total-title">Итого к оплате:</p>
                    </div>
                    <div class="basket__total-group">
                        <p class="basket__total-price">28 700 р.</p>
                        <p class="basket__total-price">0 р.</p>
                        <p class="basket__total-tprice">28 700 р.</p>
                    </div>
                </div>
            </div>
            <div class="basket__wrapp-btn">
                <a href="#" class="basket__btn">Продолжить</a>
            </div>
            <div class="basket__wrapp-order">
                <div class="basket__inner-order">
                    <p class="basket__order-title">Оформление заказа</p>
                    <p class="order-in">Ваше имя</p>
                    <input class="order-input" type="text">
                    <p class="order-in">Ваш E-mail</p>
                    <input class="order-input" type="text">
                    <p class="order-in">Ваш Телефон</p>
                    <input class="order-input" type="text">
                    <p class="order-in">Адрес доставки</p>
                    <input class="order-input" type="text">
                    <p class="order-in">Примечание</p>
                    <textarea class="order-textarea" name="" id="" cols="20" rows="4"></textarea>
                    <p class="order-in">Способ доставки</p>
                    <div class="select-order">
                        <div class="select__header-order">
                            <div class="select__current-order">Пошта-1</div>
                            <div class="select__icon-order"></div>
                        </div>
                        <div class="select__body-order">
                            <div class="select__item-order">Пошта-1</div>
                            <div class="select__item-order">Пошта-2</div>
                            <div class="select__item-order">Пошта-3</div>
                        </div>
                    </div>
                    <p class="order-in">Способ оплаты</p>
                    <div class="select-order">
                        <div class="select__header-order">
                            <div class="select__current-order">Оплата-1</div>
                            <div class="select__icon-order"></div>
                        </div>
                        <div class="select__body-order">
                            <div class="select__item-order">Оплата-1</div>
                            <div class="select__item-order">Оплата-2</div>
                            <div class="select__item-order">Оплата-3</div>
                        </div>
                    </div>
                    <div class="order-btn btn">Заказ подтверждаю</div>
                </div>
            </div>
        </div>
        <div v-else class="basked-empty">Empty</div>
    </div>
</template>

<style scoped>
.basked-empty {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    padding: 20px;
    border: 1px solid black;
    margin-bottom: 20px;
}
</style>