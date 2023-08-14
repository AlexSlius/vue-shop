<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<template>
    <div class="container">
        <h3 t>{{ route.query?.searchText }}</h3>
    </div>
</template>

<style scoped>
h3 {
    text-align: center;
    padding-bottom: 30px;
}
</style>