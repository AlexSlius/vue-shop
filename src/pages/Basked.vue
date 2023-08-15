<script setup>
import { RouterLink } from "vue-router";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import BaskedCard from "@/components/BasketCard.vue";
import BaskedPromocode from "@/components/BaskedPropmokode.vue";
import BaskedForm from "@/components/BaskeForm.vue";

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
                <BaskedPromocode :value="store.baskedPromocod" :handleInput="store.inputPromoCode"
                    :handleApplyPromoCode="store.applyPromoCode" :error="store.baskedErrorPromoCode" />
                <div class="basket__total">
                    <div class="basket__total-group">
                        <p class="basket__total-title">Итого к оплате:</p>
                    </div>
                    <div class="basket__total-group">
                        <p class="basket__total-tprice">{{ store.getPriceAll }} р.</p>
                    </div>
                </div>
            </div>
            <div class="basket__wrapp-btn">
                <RouterLink to="/catalog" class="basket__btn">Продолжить</RouterLink>
            </div>
            <BaskedForm />
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