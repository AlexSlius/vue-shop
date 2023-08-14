<script setup>
import AxeGroup from "@/components/AxeGroup.vue";

defineProps({
    dataProducts: Array
})
</script>

<template>
    <section class="categoria">
        <div class="container cnt">
            <h1 class="page__title">Категории</h1>
            <AxeGroup :dataProducts="dataProducts"/>
        </div>
    </section>
</template>