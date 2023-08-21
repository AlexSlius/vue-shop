import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useViewedStore = defineStore("viewedStore", () => {
    const viewed = ref({
        ids: []
    });

    // actions
    const addViewed = (id) => {
        if (viewed.value.ids.length == 0) {
            viewed.value.ids.push(id);
            return;
        }

        let index = viewed.value.ids.findIndex(el => (el == id));

        if (index != -1) {
            return;
        }

        viewed.value.ids.push(id);
    }

    return {
        viewed,
        addViewed
    };
});