<script setup>
defineProps({
    show: {
        type: Boolean,
        default: false
    },
    handleCLose: {
        type: Function,
        default: () => { }
    }
})
</script>

<template>
    <teleport to="#modalWindow">
        <div class="hystmodal" v-if="show">
            <div class="hystmodal__wrap">
                <div class="hystmodal_opas" @click="handleCLose"></div>
                <div class="hystmodal__window">
                    <div class="wr-btn-close">
                        <button class="hystmodal__close" @click="handleCLose">Close</button>
                    </div>
                    <div class="hystmodal__content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.hystmodal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    padding: 30px 0;
}

.hystmodal_opas {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.hystmodal__wrap {
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    min-height: 100%;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}

.hystmodal__window {
    margin: 50px 0;
    flex-shrink: 0;
    flex-grow: 0;
    background: #fff;
    width: 600px;
    max-width: 100%;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
    padding: 16px;
    z-index: 100;
    position: relative;
}

.wr-btn-close {
    display: flex;
    justify-content: flex-end;
}

.hystmodal__content {
    margin-top: 20px;
}
</style>