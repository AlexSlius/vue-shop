import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBaskedStore = defineStore('baskedStore', () => {
    const baskedProducts = ref([]);

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

    // getters
    const getPriceAll = computed(() => {
        let fullprice = 0;

        if (baskedProducts.value.length > 0)
            baskedProducts.value.forEach(item => {
                fullprice += Number(item.quantity * item.price);
            })

        return fullprice;
    });

    const getlengthAll = computed(() => {
        let fullQuantity = 0;

        if (baskedProducts.value.length > 0)
            baskedProducts.value.forEach(item => {
                fullQuantity += item.quantity;
            })

        return fullQuantity;
    });

    return {
        baskedProducts,
        addProduct,
        deleteProduct,
        quantityMinus,
        quantityPlus,
        getPriceAll,
        getlengthAll
    };
})
