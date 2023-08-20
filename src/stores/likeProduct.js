import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLikeProduct = defineStore('likeProductStore', () => {
    const likeProducts = ref([]);

    // action 
    const addLike = (data) => {
        likeProducts.value.push(data);
    }

    const removeLink = (data) => {
        let index = likeProducts.value.findIndex(el => el.id == data.id);
        likeProducts.value.splice(index, 1);
    }

    // get 
    const getProductInLink = (id) => {
        return likeProducts.value.findIndex(el => el.id == id) !== -1;
    }

    return {
        likeProducts,
        addLike,
        removeLink,
        getProductInLink
    };
})