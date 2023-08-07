<script setup>
import { ref } from "vue";

defineProps({
    list: Array,
    current: Number,
    handle: Function,
});

let show = ref(false);

const handleShow = () => {
    show.value = !show.value;
}

</script>

<template>
    <div class="select-city" :class="{ 'is-active': show }">
        <div class="select__header-city" @click="handleShow">
            <div class="select__current-city">{{ list.find(el => (el.id == current))?.name || "" }}</div>
            <div class="select__icon-city"></div>
        </div>
        <div class="select__body-city" v-if="show">
            <div class="select__item-city" v-for="item in list" :key="item.id" @click="handle(item.id); handleShow()">
                <a>{{ item.name }}</a>
            </div>
        </div>
    </div>
</template>