<script setup>
defineProps({
    value: String,
    error: Boolean,
    handleInput: Function,
    handleApplyPromoCode: Function
})
</script>

<template>
    <div>
        <div class="basket__wrapp-promo">
            <div class="basket__promo-in">
                <div class="text-in">Введите промокод</div>
                <input class="promo-input" type="text" name="promocode" placeholder="------" v-maxlen="6" :value="value"
                    @input="(e) => handleInput(e.target.value)">
            </div>
            <button class="basket__promo-btn" :disabled="value.length != 6"
                @click.even="handleApplyPromoCode">Применить</button>
        </div>
        <div class="warn" v-if="error">Помилка</div>
    </div>
</template>

<style scoped>
.warn {
    color: red;
    margin-top: 14px;
}
</style>