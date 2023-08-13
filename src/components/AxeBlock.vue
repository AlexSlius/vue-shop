<script setup>
import IconSprite from "./IconSprite.vue";

defineProps({
    handleShow: Function,
    show: Boolean
})
</script>

<template>
    <div class="axe-block" @click="handleShow">
        <div class="axe-row">
            <div class="axe-icon">
                <IconSprite :dopClass="'axe-icon'" :tag="'sun'" />
            </div>
            <div class="axe-img">
                <img src="/src/assets/img/axe-group/axe-1.png" alt="">
            </div>
            <div class="axe-arrow" :class="{ 'axe-arrow-on': show }">
                <div class="arrow-top">
                    <IconSprite :dopClass="'arr'" :tag="'arrow'" />
                </div>
                <div class="arrow-bottom">
                    <IconSprite :dopClass="'arr'" :tag="'arrow'" />
                </div>
            </div>
        </div>
        <h4 class="axe-sub">Солнцезащитные очки</h4>
    </div>
</template>