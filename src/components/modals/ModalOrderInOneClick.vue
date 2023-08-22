<script setup>
import { reactive } from "vue";
import layoutModal from "./Modallayout.vue";
import FieldInput from "@/components/FieldInput.vue";
import ButtonForm from "@/components/ButtonForm.vue";

const forData = reactive({
    name: "",
    email: "",
    phone: ""
});

defineProps({
    show: Boolean,
    handleCloseModal: Function,
    name: String
});

const handleField = (value, name) => {
    forData[name] = value;
}
</script>

<template>
    <layoutModal :show="show" :handleCLose="handleCloseModal">
        <h3>Купити в один клік</h3>
        <p>{{ name }}</p>
        <form>
            <FieldInput :label="'Ваше имя'" :name="'name'" :handle="handleField" />
            <FieldInput :label="'Ваш E-mail'" :name="'email'" :handle="handleField" />
            <FieldInput :label="'Ваш Телефон'" :name="'phone'" :handle="handleField" />
            <ButtonForm />
        </form>
    </layoutModal>
</template>