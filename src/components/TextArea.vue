<script setup>
let { typeField } = defineProps({
    label: String,
    name: String,
    value: String,
    handle: Function,
    typeField: {
        type: String,
        default: "greey"
    },
    error: {
        type: Boolean
    }
});

const typeClasslabel = (typeField == "greey") ? { "text-in": true } : { "order-in": true };
const typeClassField = (typeField == "greey") ? { "user__text-input": true } : { "order-textarea": true };
</script>

<template>
    <div>
        <p class="text-in" :class="typeClasslabel">{{ label }}</p>
        <textarea :class="{ 'error': error, ...typeClassField }" :value="value" :name="name" cols="30" rows="11"
            @change="(e) => handle(e.target.value, e.target.name, e)"></textarea>
    </div>
</template>