import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { sortProduct } from "../utils/sortProduct";
import { filterProduct } from "../utils/filterProduct";

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
      "model": "Lt-963r",
      "name": "Солнце защитные очки",
      "priceLast": 3010.00,
      "price": 2511.00,
      "views": 0,
      "category": "eye",
      "functions": [
        "polarized", "doubleLens", "fitOverGlass", "helmetCompatible"
      ],
      "styles": [
        "ladys", "unisex", "kids", "tenns"
      ]
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
      "views": 10,
      "category": "sun",
      "functions": [
        "polarized", "fitOverGlass", "helmetCompatible"
      ],
      "styles": [
        "ladys", "kids", "tenns"
      ]
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
      "views": 100,
      "category": "eye",
      "functions": [
        "fitOverGlass", "helmetCompatible"
      ],
      "styles": [
        "kids", "tenns"
      ]
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
      "views": 20,
      "category": "sun",
      "functions": [
        "polarized", "doubleLens"
      ],
      "styles": [
        "ladys", "unisex"
      ]
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
      "price": 19213.00,
      "views": 2,
      "category": "eye",
      "functions": [
        "polarized", "doubleLens", "fitOverGlass", "helmetCompatible"
      ],
      "styles": [
        "ladys", "unisex", "kids", "tenns"
      ]
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
      "views": 4,
      "category": "sun",
      "functions": [
        "fitOverGlass"
      ],
      "styles": [
        "unisex"
      ]
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
      "views": 5,
      "category": "sun",
      "functions": [
        "helmetCompatible"
      ],
      "styles": [
        "tenns"
      ]
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
      "views": 6,
      "category": "eye",
      "functions": [
        "doubleLens"
      ],
      "styles": [
        "ladys"
      ]
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
      "views": 8,
      "category": "sun",
      "functions": [
        "fitOverGlass", "helmetCompatible"
      ],
      "styles": [
        "ladys", "unisex"
      ]
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
      "views": 72,
      "category": "eye",
      "functions": [
        "polarized", "doubleLens"
      ],
      "styles": [
        "unisex"
      ]
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
      "views": 222,
      "category": "sun",
      "functions": [
        "polarized"
      ],
      "styles": [
        "ladys", "unisex", "kids", "tenns"
      ]
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
      "views": 454,
      "category": "eye",
      "functions": [
        "polarized", "doubleLens"
      ],
      "styles": [
        "kids", "tenns"
      ]
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
      "views": 1,
      "category": "sport",
      "functions": [
        "polarized", "doubleLens"
      ],
      "styles": [
        "ladys", "unisex"
      ]
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
      "views": 4,
      "category": "sun",
      "functions": [
        "polarized", "helmetCompatible"
      ],
      "styles": [
        "ladys", "tenns"
      ]
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
      "views": 65,
      "category": "sport",
      "functions": [
        "helmetCompatible"
      ],
      "styles": [
        "tenns"
      ]
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
      "views": 54,
      "category": "sun",
      "functions": [
        "polarized", "doubleLens"
      ],
      "styles": [
        "ladys", "unisex"
      ]
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
      "views": 542,
      "category": "sport",
      "functions": [
        "fitOverGlass"
      ],
      "styles": [
        "ladys"
      ]
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
      "views": 543,
      "category": "sun",
      "functions": [
        "polarized"
      ],
      "styles": [
        "ladys", "tenns"
      ]
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
      "views": 34,
      "category": "sport",
      "functions": [
        "helmetCompatible"
      ],
      "styles": [
        "ladys"
      ]
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
      "views": 0,
      "category": "sport",
      "functions": [
        "polarized", "doubleLens", "fitOverGlass", "helmetCompatible"
      ],
      "styles": [
        "ladys", "unisex", "kids", "tenns"
      ]
    }
  ]);

  const getPropductsInQuantity = (quantity = 4) => {
    return products.value.slice(0, quantity);
  }

  const getProdunctsByFilterAndSorting = ({ filter, sort, category = null, functions = [], styles = [] }) => {
    let { type } = sort;

    let filterCardProduct = filterProduct({ products: products.value, filter, category, functions, styles })
    return sortProduct({ products: filterCardProduct, typeSort: type });
  }

  const getBySearch = (textSearch) => {
    return products.value.filter((el) => {
      return (el.name.toLowerCase().includes(textSearch.toLowerCase())) || (el.model.toLowerCase().includes(textSearch.toLowerCase()));
    });
  }

  return {
    products,
    getPropductsInQuantity,
    getProdunctsByFilterAndSorting,
    getBySearch
  };
})
