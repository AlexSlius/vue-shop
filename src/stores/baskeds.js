import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useBaskedStore = defineStore('baskedStore', () => {
    const promoCodesAvalibal = [
        {
            code: "123456",
            discount: 500
        },
        {
            code: "654321",
            discount: 5000
        },
    ];

    // ---- -- --- ---

    const baskedProducts = ref([]);
    const baskedPromocod = ref('');
    const baskedActivePromoCode = ref(null);
    const baskedPrice = ref(0);
    const baskedErrorPromoCode = ref(false);

    // actions
    const addProduct = (productCard) => {
        if (baskedProducts.value.length > 0) {
            let indx = baskedProducts.value.findIndex(el => el.id == productCard.id);

            if (indx != -1) {
                baskedProducts.value[indx].quantity = baskedProducts.value[indx].quantity + 1;
                return;
            }
        }
        baskedProducts.value.push({ ...productCard, quantity: 1 });
    }

    const deleteProduct = (id) => {
        baskedProducts.value = baskedProducts.value.filter(el => el.id != id);
    }

    const quantityMinus = (id) => {
        let indx = baskedProducts.value.findIndex(el => el.id == id);

        if (baskedProducts.value[indx].quantity > 1) {
            baskedProducts.value[indx].quantity = baskedProducts.value[indx].quantity - 1;
            return;
        }

        if (baskedProducts.value[indx].quantity == 1) {
            baskedProducts.value = baskedProducts.value.filter(el => el.id != id);
        }
    }

    const quantityPlus = (id) => {
        let indx = baskedProducts.value.findIndex(el => el.id == id);

        if (baskedProducts.value[indx].quantity < 10) {
            baskedProducts.value[indx].quantity = baskedProducts.value[indx].quantity + 1;
        }
    }

    const inputPromoCode = (value) => {
        baskedPromocod.value = value;
    }

    const applyPromoCode = () => {
        baskedErrorPromoCode.value = false;
        let promoCode = promoCodesAvalibal.find(el => el.code == baskedPromocod.value);

        if (promoCode) {
            if (baskedActivePromoCode.value?.code == promoCode.code) {
                baskedErrorPromoCode.value = true;
                return;
            }

            baskedActivePromoCode.value = promoCode;
            baskedPrice.value = promoCode.discount;
        }

        if(!promoCode) {
            baskedErrorPromoCode.value = true;
        }
    }

    const cleanPromocode = () => {
        
    }

    // getters
    const getPriceAll = computed(() => {
        let fullprice = 0;

        if (baskedProducts.value.length > 0)
            baskedProducts.value.forEach(item => {
                fullprice += Number(item.quantity * item.price);
            })

        return fullprice - baskedPrice.value;
    });

    const getlengthAll = computed(() => {
        let fullQuantity = 0;

        if (baskedProducts.value.length > 0)
            baskedProducts.value.forEach(item => {
                fullQuantity += item.quantity;
            })

        return fullQuantity;
    });

    const getProductInTheBasked = (id) => {
        if (baskedProducts.value.length > 0)
            return baskedProducts.value.findIndex(el => el.id == id) != -1;

        return false;
    }

    // watchEffect(() => console.log(baskedProducts.value))

    return {
        baskedProducts,
        addProduct,
        deleteProduct,
        quantityMinus,
        quantityPlus,
        getPriceAll,
        getlengthAll,
        getProductInTheBasked,
        baskedPromocod,
        inputPromoCode,
        baskedPrice,
        applyPromoCode,
        baskedErrorPromoCode
    };
})
