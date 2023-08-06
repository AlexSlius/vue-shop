<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    currentPage: String,
    intermediate: Array
})
</script>

<template>
    <div class="main-wrapp">
        <div class="breadcrumbs-wrap">
            <div class="container">
                <ul class="breadcrumbs">
                    <li>
                        <RouterLink to="/">Главная</RouterLink>
                    </li>
                    <template v-if="intermediate?.length > 0">
                        <li v-for="(item, index) in intermediate" :key="index">
                            <RouterLink :to="item.path">{{ item.page }}</RouterLink>
                        </li>
                    </template>
                    <li>
                        <span>{{ currentPage }}</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>