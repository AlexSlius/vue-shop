import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore("useFilterStore", () => {
    const filter = ref({
        price: {
            min: 500,
            max: 20000
        },
        functions: [],
        styles: []
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

    const handleUpdateFunction = (key) => {
        if (filter.value.functions.length == 0) {
            filter.value.functions.push(key);
            return;
        }

        let index = filter.value.functions.findIndex(el => el == key);

        if (index != -1) {
            filter.value.functions.splice(index, 1);
            return;
        }

        filter.value.functions.push(key);
    }

    const handleUpdateStyle = (key) => {
        if (filter.value.styles.length == 0) {
            filter.value.styles.push(key);
            return;
        }

        let index = filter.value.styles.findIndex(el => el == key);

        if (index != -1) {
            filter.value.styles.splice(index, 1);
            return;
        }

        filter.value.styles.push(key);
    }

    const defaultFilter = () => {
        filter.value = {
            price: {
                min: 500,
                max: 20000
            },
            functions: [],
            styles: []
        }
    }

    return {
        filter,
        updatePriceMin,
        updatePriceMax,
        handleRange,
        defaultFilter,
        handleUpdateFunction,
        handleUpdateStyle
    };
})