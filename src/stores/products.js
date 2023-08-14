import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      "id": 0,
      "tags": [
        {
          "id": 0,
          "name": "HIT",
          "class": "hit"
        },
        {
          "id": 1,
          "name": "MEN’s",
          "class": "man"
        },
        {
          "id": 2,
          "name": "LADY’s",
          "class": "lady"
        }
      ],
      "photo": "/src/assets/img/accessories_catalog/accessories_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2500.00
    },
    {
      "id": 1,
      "tags": [
        {
          "id": 0,
          "name": "HIT",
          "class": "hit"
        },
        {
          "id": 1,
          "name": "MEN’s",
          "class": "man"
        },
        {
          "id": 2,
          "name": "LADY’s",
          "class": "lady"
        }
      ],
      "photo": "/src/assets/img/accessories_catalog/accessories_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2500.00
    },
    {
      "id": 2,
      "tags": [
        {
          "id": 0,
          "name": "HIT",
          "class": "hit"
        },
        {
          "id": 1,
          "name": "MEN’s",
          "class": "man"
        },
        {
          "id": 2,
          "name": "LADY’s",
          "class": "lady"
        }
      ],
      "photo": "/src/assets/img/accessories_catalog/accessories_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2500.00
    },
    {
      "id": 3,
      "tags": [
        {
          "id": 0,
          "name": "HIT",
          "class": "hit"
        },
        {
          "id": 1,
          "name": "MEN’s",
          "class": "man"
        },
        {
          "id": 2,
          "name": "LADY’s",
          "class": "lady"
        }
      ],
      "photo": "/src/assets/img/accessories_catalog/accessories_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2500.00
    },
    {
      "id": 4,
      "tags": [
        {
          "id": 0,
          "name": "HIT",
          "class": "hit"
        },
        {
          "id": 1,
          "name": "MEN’s",
          "class": "man"
        },
        {
          "id": 2,
          "name": "LADY’s",
          "class": "lady"
        }
      ],
      "photo": "/src/assets/img/accessories_catalog/accessories_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2500.00
    }
  ]);

  // const doubleCount = computed(() => count.value * 2)

  // function increment() {
  //   count.value++
  // }

  return { products };
})
