<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import SelectSort from "@/components/SelectSort.vue";
</script>

<template>
    <div class="container">
        <div class="__page-img">
            <img src="/src/assets/img/axe-group/axe-2.png" alt="" class="page__img">
            <div class="axe-ico">
                <div class="axe-icon">
                    <img class="axe-icon" src="/src/assets/img/axe-group/snow.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <BreadCrumbs :currentPage="'Спортивные очки'" :intermediate="[{ page: 'Каталог', path: '/catalog' }]" />
    <div class="catalog__text-group">
        <div class="container">
            <h1 class="catalog__name">Спортивные очки</h1>
            <p class="catalog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="catalog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    <div class="filter-product__wrapp">
        <div class="container ">
            <div class="filter-product__row">
                <div class="filters__wrap">
                    <h4 class="filter__title filt-bg">Фильтры <span class="filter__close"></span></h4>
                    <h5 class="filter__title">функционал</h5>
                    <div class="check__block">
                        <input type="checkbox" class="checkbox" id=checkbox_1>
                        <label for="checkbox_1" class="checkbox__label">polarized
                            <span class="under">Поляризационны</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_2>
                        <label for="checkbox_2" class="checkbox__label">double lens
                            <span class="under">Двойная линза</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_3>
                        <label for="checkbox_3" class="checkbox__label">fit over glass
                            <span class="under">Укладываться на стекло</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_4>
                        <label for="checkbox_4" class="checkbox__label">helmet compatible
                            <span class="under">Совместимый со шлемом</span></label>
                    </div>

                    <h5 class="filter__title">Стиль</h5>
                    <div class="check__block">
                        <input type="checkbox" class="checkbox" id=checkbox_5>
                        <label for="checkbox_5" class="checkbox__label man-s">Мужские
                            <span class="man">MEN’s</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_6>
                        <label for="checkbox_6" class="checkbox__label ladys-s">Женские
                            <span class="ladys">LADY’s</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_7>
                        <label for="checkbox_7" class="checkbox__label unisex-s">Унисекс
                            <span class="unisex">UNISEX</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_8>
                        <label for="checkbox_8" class="checkbox__label kids-s">Детские
                            <span class="kids">KID’s</span></label>
                        <input type="checkbox" class="checkbox" id=checkbox_9>
                        <label for="checkbox_9" class="checkbox__label tenns-s">Подростковые
                            <span class="tenns">TENN’s</span></label>
                    </div>

                    <h5 class="filter__title">Цена</h5>


                    <div class="check__block">
                        <div class="filter-price__inputs">
                            <label class="filter-price__label">
                                <input type="number" min="500" max="999999" placeholder="1000" class="filter-price__input"
                                    id="input-0">

                            </label>
                            <span>-</span>
                            <label class="filter-price__label">
                                <input type="number" min="500" max="999999" placeholder="30000" class="filter-price__input"
                                    id="input-1">
                            </label>
                        </div>

                        <div class="filter-price__slider" id="range-slider"> </div>
                    </div>

                    <a href="#" class="filter-img">
                        <img src="/src/assets/img/filter-2.png" alt="">
                        <span class="filter-name">Спортивные</span>
                        <span class="filter-details">Подробнее>></span>
                    </a>
                </div>
                <div class="products__wrap">
                    <div class="sort-count__block">
                        <div class="filter__btn btn">Фильтры</div>
                        <div class="sort-column">
                            <div class="sort-text"> Сортировать по:</div>
                            <SelectSort :value="'Популярности'" />
                        </div>
                        <div class="count-colum">Товаров:<span class="red">28</span></div>
                    </div>
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
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-1.png"
                                    alt=""></a>
                            <a href="#" class="product__name">Lt-964r</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-2.png"
                                    alt=""></a>
                            <a href="#" class="product__name">jh-123p</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-3.png"
                                    alt=""></a>
                            <a href="#" class="product__name">iot-41q</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                    <a href="#" class="tenns">TEEN’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-4.png"
                                    alt=""></a>
                            <a href="#" class="product__name">wr-789q</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-5.png"
                                    alt=""></a>
                            <a href="#" class="product__name">br-455(t)</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-6.png"
                                    alt=""></a>
                            <a href="#" class="product__name">ewt-963</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-7.png"
                                    alt=""></a>
                            <a href="#" class="product__name">asd-555</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-8.png"
                                    alt=""></a>
                            <a href="#" class="product__name">zxc-456q</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-9.png"
                                    alt=""></a>
                            <a href="#" class="product__name">hod-230f</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-10.png"
                                    alt=""></a>
                            <a href="#" class="product__name">ipv-351(f)</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-11.png"
                                    alt=""></a>
                            <a href="#" class="product__name">tgf-856</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-12.png"
                                    alt=""></a>
                            <a href="#" class="product__name">rt-228</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-13.png"
                                    alt=""></a>
                            <a href="#" class="product__name">dfg-751</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-14.png"
                                    alt=""></a>
                            <a href="#" class="product__name">qas-963</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-15.png"
                                    alt=""></a>
                            <a href="#" class="product__name">cvb-741</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-16.png"
                                    alt=""></a>
                            <a href="#" class="product__name">alg-357</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-17.png"
                                    alt=""></a>
                            <a href="#" class="product__name">fgh-123</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-18.png"
                                    alt=""></a>
                            <a href="#" class="product__name">ijf-7894</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-19.png"
                                    alt=""></a>
                            <a href="#" class="product__name">dert-952</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-20.png"
                                    alt=""></a>
                            <a href="#" class="product__name">rfv-958</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-21.png"
                                    alt=""></a>
                            <a href="#" class="product__name">vbn-368</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-22.png"
                                    alt=""></a>
                            <a href="#" class="product__name">mnr-320</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-23.png"
                                    alt=""></a>
                            <a href="#" class="product__name">tyu-956</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-24.png"
                                    alt=""></a>
                            <a href="#" class="product__name">mon-564</a>
                            <p class="product__subname">Маска горнолыжная</p>
                            <p class="product__last-prise">3 000.00 р.</p>
                            <p class="product__prise">2 500.00 р.</p>
                            <a href="#" class="btn red">В корзину</a>
                        </div>

                        <div class="__item">
                            <div class="like-hit__row">
                                <a href="#" class="like"></a>
                                <div class="hit__group">
                                    <a href="#" class="hit">HIT</a>
                                    <a href="#" class="man">MEN’s</a>
                                    <a href="#" class="lady">LADY’s</a>
                                </div>
                            </div>
                            <a href="#" class="product__img"><img src="/src/assets/img/snow_catalog/snow_item-25.png"
                                    alt=""></a>
                            <a href="#" class="product__name">rtx3090</a>
                            <p class="product__subname">Маска горнолыжная</p>
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