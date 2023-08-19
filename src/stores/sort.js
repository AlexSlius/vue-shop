import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useSort = defineStore('sortStore', () => {
    const sort = ref({
        type: "pop",
        name: "Популярности"
    });

    // action 
    const updateSort = (type, name) => {
        sort.value = { type, name };
    }

    const defaultSort = () => {
        sort.value = {
            type: "pop",
            name: "Популярности"
        }
    }

    return {
        sort,
        updateSort,
        defaultSort
    };
})