<template>
    <section class="tab tab__reviews">
                <div class="container">
                    <h3 class="tab__title mb-60">Отзывы покупателей</h3>
                    <div class="tab__reviews-wrapp">
                        <div class="tab__reviews-user">
                            <div class="user-icno">
                                <img src="/src/assets/img/card__item/reviews-icon.svg" alt="">
                            </div>
                            <div class="user-info">
                                <p class="user-date">01.01.21</p>
                                <p class="user-name">Антон</p>
                            </div>
                            <div class="user-stars">
                                <div class="user-strars_item-1">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-2">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-3">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-4">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-5">
                                    <svg class="star ">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p class="tab__reviews-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit
                            anim id est laborum.</p>
                        <div class="tab__reviews-block-img">
                            <img src="/src/assets/img/card__item/tab__reviews-1.png" alt="img" class="tab__reviews-img">
                            <img src="/src/assets/img/card__item/tab__reviews-2.png" alt="img" class="tab__reviews-img">
                            <img src="/src/assets/img/card__item/tab__reviews-3.png" alt="img" class="tab__reviews-img">
                        </div>
                    </div>
                    <div class="tab__reviews-wrapp">
                        <div class="tab__reviews-user">
                            <div class="user-icno">
                                <img src="/src/assets/img/card__item/reviews-icon.svg" alt="">
                            </div>
                            <div class="user-info">
                                <p class="user-date">11.01.21</p>
                                <p class="user-name">Аннa</p>
                            </div>
                            <div class="user-stars">
                                <div class="user-strars_item-1">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-2">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-3">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-4">
                                    <svg class="star star-red">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="user-strars_item-5">
                                    <svg class="star ">
                                        <use xlink:href="/src/assets/img/svg/sprite.svg#star"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p class="tab__reviews-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit
                            anim id est laborum.</p>
                        <div class="tab__reviews-block-img">
                            <img src="/src/assets/img/card__item/tab__reviews-4.png" alt="img" class="tab__reviews-img">
                            <img src="/src/assets/img/card__item/tab__reviews-5.png" alt="img" class="tab__reviews-img">
                        </div>
                    </div>
                    <div class="tab__reviews-in">
                        <h3 class="tab__title mb-40">Добавить отзыв</h3>
                        <p class="user__name-in text-in required">Ваше имя</p>
                        <input class="user__name-input text-input " type="text" name="">
                        <p class="photo__name-in text-in">f050f530-4aa2-4eee-a28b-772e13c38052_fs.jpg <span
                                class="photo__name-close"></span></p>
                        <div class="photo__upload-block">
                            <p class="photo__name-up text-in">Загрузить фото
                            </p>
                            <span class="photo__name-up__btn"></span>
                        </div>
                        <div class="rating__block">
                            <p class="raring__user text-in ">Оценка:</p>
                            <div class="rating-area">
                                <input type="radio" id="star-5" name="rating" value="5">
                                <label for="star-5" title="Оценка «5»"></label>
                                <input type="radio" id="star-4" name="rating" value="4">
                                <label for="star-4" title="Оценка «4»"></label>
                                <input type="radio" id="star-3" name="rating" value="3">
                                <label for="star-3" title="Оценка «3»"></label>
                                <input type="radio" id="star-2" name="rating" value="2">
                                <label for="star-2" title="Оценка «2»"></label>
                                <input type="radio" id="star-1" name="rating" value="1">
                                <label for="star-1" title="Оценка «1»"></label>
                            </div>
                        </div>
                        <p class="user__text-in text-in required">Текст отзыва</p>
                        <textarea class="user__text-input" id="" cols="40" rows="10"></textarea>
                        <p class="captcha-in text-in required">Подтвердите, что вы не робот</p>
                        <div class="captcha-input"><img src="/src/assets/img/card__item/captcha.png" alt=""></div>
                        <div class="review-btn "><a class="btn" href="">Добавить</a></div>
                    </div>
                </div>
            </section>
</template>