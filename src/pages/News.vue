<script setup>
import TitlePage from "@/components/TitlePage.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import NewsBanner from "@/components/NewsBanner.vue";
import CardNewBanner from "@/components/CardNewBanner.vue";
import CardNew from "@/components/CardNew.vue";
import Pagination from "@/components/Pagination.vue";
</script>

<template>
    <BreadCrumbs :currentPage="'Новости'" />
    <div class="container">
        <TitlePage :name="'Новости'" />
        <div class="news-page__wrapp">
            <NewsBanner>
                <CardNewBanner :scrImg="'/src/assets/img/card__item/basket-1.png'" />
                <CardNewBanner :scrImg="'/src/assets/img/card__item/basket-3.png'" />
            </NewsBanner>
            <div class="news-page__block">
                <CardNew :scrImage="'/src/assets/img/new-1.png'" :path="'/news/firspost'" :date="'21.01.2022'"
                    :name="'First post'" :des="`Lorem ipson`" />
                <Pagination />
            </div>
        </div>
    </div>
</template>