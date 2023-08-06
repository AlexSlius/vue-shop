<script setup>
import Header from "@/components/header/Header.vue";
import Wrapper from "@/layout/MainWrapp.vue";
import MainWrap from "@/layout/MainWrapp.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
    <Wrapper>
        <Header />
        <MainWrap>
            <slot></slot>
        </MainWrap>
        <Footer />
    </Wrapper>
</template>