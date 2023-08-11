<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SortCount from "@/components/SortCount.vue";
import Filter from "@/components/Filter.vue"
</script>

<template>
    <BreadCrumbs :currentPage="'Каталог'" />
    <div class="catalog__text-group">
        <div class="container">
            <h1 class="page__name">Аксессуары</h1>
        </div>
    </div>
    <div class="filter-product__wrapp">
        <div class="container ">
            <div class="filter-product__row">
                <Filter />
                <div class="products__wrap">
                    <SortCount />
                    <div class="products__inner">
                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img
                                    src="/src/assets/img/accessories_catalog/accessories_item-1.png" alt=""></a>
                            <a href="#" class="product__name">Lt-964r</a>
                            <p class="product__subname">Солнце защитные очки</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>