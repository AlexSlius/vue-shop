<script setup>
defineProps({
    dopClass: {
        type: String
    },
    tag: {
        required: true,
        type: String,
    }
});
</script>

<template>
    <svg class="icon" :class="dopClass">
        <use :xlink:href="`/src/assets/img/svg/sprite.svg#${tag}`"></use>
    </svg>
</template>