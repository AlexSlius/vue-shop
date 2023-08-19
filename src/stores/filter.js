import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore("useFilterStore", () => {
    const filter = ref({
        price: {
            min: 500,
            max: 20000
        }
    });

    // action
    const updatePriceMin = (value) => {
        filter.value.price.min = Number(value);
    }

    const updatePriceMax = (value) => {
        filter.value.price.max = Number(value);
    }

    const handleRange = (value) => {
        filter.value.price.min = value[0];
        filter.value.price.max = value[1];
    }

    const defaultFilter = () => {
        filter.value = {
            price: {
                min: 500,
                max: 20000
            }
        }
    }

    return {
        filter,
        updatePriceMin,
        updatePriceMax,
        handleRange,
        defaultFilter
    };
})