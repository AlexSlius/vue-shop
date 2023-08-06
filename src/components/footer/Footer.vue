<script setup>
import { RouterLink } from 'vue-router';

import FooterAgreement from "./FooterAgreement.vue";
import FooterSocial from "./FooterSocial.vue";
import FooterSearch from "./FooterSearch.vue";
import FooterColum from "./FooterColumn.vue";

import datas from "./data/dataFooter.json";

let { columnOne, columnTwo } = datas;
</script>

<template>
    <footer class="footer">
        <div class="footer__wrapp">
            <div class="container">
                <div class="footer__row">
                    <div class="footer__block">
                        <RouterLink to="/" class="footer-logo">
                            <img src="/src/assets/img/Logo-w.svg" alt="img logo" class="img-logo">
                        </RouterLink>
                        <FooterSocial />
                    </div>
                    <FooterColum :title="columnOne.title" :links="columnOne.links" />
                    <FooterColum :dopClass="'mr'" :title="columnTwo.title" :links="columnTwo.links" />
                    <div class="footer__input-block">
                        <a href="tel:8(450) 111 11 11" class="footer__phone">8(450) 111 11 11</a>
                        <p class="footer__text">Подпишитесь! Новинки, скидки, предложения! </p>
                        <FooterSearch />
                    </div>
                    <span class="bg-center">1936</span>
                </div>
            </div>
        </div>
        <FooterAgreement />
    </footer>

    <div class="scroll-up js-scroll-up">
        <svg class="scroll-up__svg" viewBox="-2 -2 52 52">
            <path class="scroll-up__path js-scroll-up__path" d="M24,0 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48" />
        </svg>
    </div>
</template>