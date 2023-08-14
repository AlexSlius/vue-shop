<script setup>
defineProps({
    value: String,
    handleInput: Function,
    handleNextSearch: Function
});
</script>

<template>
    <div class="header__search">
        <input class="header__input" :value="value" type="text" placeholder="поиск" @input="handleInput" @keyup.enter="handleNextSearch">
        <button class="header__search-btn" @click.event="handleNextSearch"></button>
    </div>
</template>