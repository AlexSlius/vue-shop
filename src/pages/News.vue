<script setup>
import TitlePage from "@/components/TitlePage.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import NewsBanner from "@/components/NewsBanner.vue";
import CardNew from "@/components/CardNew.vue";
import Pagination from "@/components/Pagination.vue";
</script>

<template>
    <BreadCrumbs :currentPage="'Новости'" />
    <div class="container">
        <TitlePage :name="'Новости'" />
        <div class="news-page__wrapp">
            <NewsBanner />
            <div class="news-page__block">
                <CardNew />
                <Pagination />
            </div>
        </div>
    </div>
</template>