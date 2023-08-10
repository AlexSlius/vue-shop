<script setup>
import { ref } from "vue";

defineProps({
    handleSelect: Function,
    value: String
});

const refShow = ref(false);

const handleClose = () => {
    refShow.value = false;
}

</script>

<template>
    <div class="select" :class="{ 'is-active': refShow }">
        <div class="select__header" @click="() => refShow = !refShow">
            <span class="select__current">{{ value }}
                <span class="current__arrow"></span>
            </span>
            <div class="select__icon"></div>
        </div>
        <div class="select__body" v-if="refShow">
            <div class="select__item" @click="() => { handleSelect('pop', 'Популярности'); handleClose() }">
                Популярности<span class="select__arrow"></span></div>
            <div class="select__item" @click="() => { handleSelect('ot', 'От дорогих'); handleClose() }">От дорогих
                <span class="select__arrow">
                    <svg class="icon">
                        <use xlink:href="/src/assets/img/svg/sprite.svg#catalog-price__arrow-up">
                        </use>
                    </svg>
                </span>
            </div>
            <div class="select__item" @click="() => { handleSelect('do', 'От дешевых'); handleClose() }"> От дешевых
                <span class="select__arrow"><svg class="icon">
                        <use xlink:href="/src/assets/img/svg/sprite.svg#catalog-price__arrow-down">
                        </use>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>