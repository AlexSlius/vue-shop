<script setup>
import { reactive } from "vue";

import SectionTabReviews from "@/components/SectionTabReviews.vue";
import SectionTabVideo from "@/components/SectionTabVideo.vue";
import SectionTabDescription from "@/components/SectionTabDescription.vue";

const dataTabs = reactive({ tab: 1 });

const handleTab = (tabId) => {
    dataTabs.tab = tabId;
}

</script>

<template>
    <section class="card__tabs">
        <div class="container">
            <div class="card__tabs-row">
                <div class="trapezoid__block">
                    <div class="trapezoid-wrapp">
                        <div class="trapezoid" :class="{ 'trapezoid-active': dataTabs.tab == 1 }" @click="handleTab(1)">
                            <span>Описание</span>
                        </div>
                    </div>
                    <div class="trapezoid-wrapp">
                        <div class="trapezoid" :class="{ 'trapezoid-active': dataTabs.tab == 2 }" @click="handleTab(2)">
                            <span>Видео</span>
                        </div>
                    </div>
                    <div class="trapezoid-wrapp">
                        <div class="trapezoid" :class="{ 'trapezoid-active': dataTabs.tab == 3 }" @click="handleTab(3)">
                            <span>Отзывы (2)</span>
                        </div>
                    </div>
                </div>

                <div class="trapezoid__block-mob">
                    <div class="select-tr">
                        <div class="select__header-tr">
                            <span class="select__current-tr">Описание</span>
                            <div class="select__icon-tr"></div>
                        </div>
                        <div class="select__body-tr">
                            <div class="select__item-tr trapezoid" @click="handleTab(1)">Описание</div>
                            <div class="select__item-tr trapezoid" @click="handleTab(2)">Видео</div>
                            <div class="select__item-tr trapezoid" @click="handleTab(3)">Отзывы(2)</div>
                        </div>
                    </div>

                </div>
                <div class="card__social-block">
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/vk.svg" alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/facebook.svg"
                            alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/ok.svg" alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/telegram.svg"
                            alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/twitter.svg"
                            alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/viber.svg" alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/whatsapp.svg"
                            alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/tumblr.svg"
                            alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/meetme.svg"
                            alt=""></a>
                    <a href="#" class="card__social-link"><img src="/src/assets/img/card__item/social/linkedin.svg"></a>
                </div>
            </div>
            <SectionTabDescription v-if="dataTabs.tab == 1" />
            <SectionTabVideo v-if="dataTabs.tab == 2" />
            <SectionTabReviews v-if="dataTabs.tab == 3" />
        </div>
    </section>
</template>