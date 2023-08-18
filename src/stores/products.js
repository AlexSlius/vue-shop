import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { sortProduct } from "../utils/filterAndSort";

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
      "priceLast": 3010.00,
      "price": 2511.00,
      "views": 0
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
      "photo": "/src/assets/img/accessories_catalog/accessories_item-2.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2512.00,
      "views": 10
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
      "photo": "/src/assets/img/accessories_catalog/accessories_item-4.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2514.00,
      "views": 100
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
      "photo": "/src/assets/img/axe-group/axe-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2515.00,
      "views": 20
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
      "photo": "/src/assets/img/accessories_catalog/accessories_item-3.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 25213.00,
      "views": 2
    },
    {
      "id": 5,
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
      "photo": "/src/assets/img/axe-group/axe-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2516.00,
      "views": 4
    },

    {
      "id": 7,
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
      "photo": "/src/assets/img/sun_catalog/sun_item-3.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2610.00,
      "views": 5
    },
    {
      "id": 8,
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
      "photo": "/src/assets/img/sun_catalog/sun_item-2.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2700.00,
      "views": 6
    },
    {
      "id": 6,
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
      "photo": "/src/assets/img/axe-group/axe-3.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2517.00,
      "views": 8
    },
    {
      "id": 9,
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
      "photo": "/src/assets/img/sun_catalog/sun_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2800.00,
      "views": 72
    },
    {
      "id": 10,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-1.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 2900.00,
      "views": 222
    },
    {
      "id": 11,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-2.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3500.00,
      "views": 454
    },
    {
      "id": 12,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-3.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3100.00,
      "views": 1
    },
    {
      "id": 13,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-4.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3200.00,
      "views": 4
    },
    {
      "id": 14,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-5.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3300.00,
      "views": 65
    },
    {
      "id": 15,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-6.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3400.00,
      "views": 54
    },
    {
      "id": 16,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-7.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3580.00,
      "views": 542
    },
    {
      "id": 17,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-8.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3600.00,
      "views": 543
    },
    {
      "id": 18,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-9.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3700.00,
      "views": 34
    },
    {
      "id": 19,
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
      "photo": "/src/assets/img/eye_catalog/eye_item-10.png",
      "alt": "iamge photo product",
      "model": "Lt-964r",
      "name": "Солнце защитные очки",
      "priceLast": 3000.00,
      "price": 3900.00,
      "views": 0
    }
  ]);

  const getPropductsInQuantity = (quantity = 4) => {
    return products.value.slice(0, quantity);
  }

  const getProdunctsByFilterAndSorting = ({ filter, sort }) => {
    let { type } = sort;

    return sortProduct({ products: products.value, typeSort: type });
  }

  return {
    products,
    getPropductsInQuantity,
    getProdunctsByFilterAndSorting
  };
})
