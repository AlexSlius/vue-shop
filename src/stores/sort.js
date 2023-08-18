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

    return {
        sort,
        updateSort
    };
})