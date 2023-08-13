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
const typeClassField = (typeField == "greey") ? { "text-input": true } : { "order-input": true };
</script>

<template>
    <div>
        <p class="text-in" :class="typeClasslabel">{{ label }}</p>
        <input :class="{ 'error': error, ...typeClassField }" type="text" :value="value" :name="name"
            @input="(e) => handle(e.target.value, e.target.name, e)">
    </div>
</template>