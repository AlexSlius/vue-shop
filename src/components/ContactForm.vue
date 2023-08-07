<script setup>
import ButtonForm from "@/components/ButtonForm.vue";
import FieldInput from "@/components/FieldInput.vue";
import FieldTextArea from "@/components/TextArea.vue";

const handleField = (value, name) => {
    console.log(value, name)
}
</script>

<template>
    <form class="contact__form">
        <FieldInput :label="'Ваше имя'" :name="'name'" :handle="handleField" />
        <FieldInput :label="'Ваш E-mail'" :name="'email'" :handle="handleField" />
        <FieldInput :label="'Ваш Телефон'" :name="'phone'" :handle="handleField" />
        <FieldTextArea :label="'Ваше сообщение'" :name="'desc'" :handle="handleField" />
        <ButtonForm />
    </form>
</template>