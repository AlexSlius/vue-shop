<script setup>
import { ref } from "vue";
// components
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ButtonCity from "@/components/ButtonCity.vue";
import TitlePage from "@/components/TitlePage.vue";
import SelectCity from "@/components/SelectCity.vue";
import ContactTabBlock from "@/components/ContactTabBlock.vue";
import ContactForm from "@/components/ContactForm.vue";

// datas
import { titlePage, tabs } from "@/dataPages/contact.json";

// functional
let currentTab = ref(tabs[0].id);

const handleTab = (id) => {
    currentTab.value = id;
}
</script>

<template>
    <BreadCrumbs :currentPage="'НОВОСТИ'" />
    <div class="container ">
        <TitlePage :name="titlePage" />
        <div class="contact__city-wrapp">
            <ButtonCity v-for="iteTab in tabs" :key="iteTab.id" :id="iteTab.id" :name="iteTab.name"
                :active="iteTab.id == currentTab" :handle="handleTab" />
        </div>
        <SelectCity :list="tabs" :current="currentTab" :handle="handleTab" />
        <template v-for="item in tabs" :key="item.id">
            <ContactTabBlock v-if="item.id == currentTab" :desc="item.desc" :address="item.address" :phone="item.phone"
                :email="item.email" :socials="item.socials" :iframeMap="item.iframeMap" />
        </template>
        <h4 class="page__tile">Или заполните форму и с Вами свяжутся.</h4>
        <ContactForm />
    </div>
</template>