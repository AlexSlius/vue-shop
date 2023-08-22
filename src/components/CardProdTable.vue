<script setup>
defineProps({
    dataCharacteristic: Array
});
</script>

<template>
    <table class="card__item__tabel" v-if="dataCharacteristic?.length > 0">
        <th class="card__item__tabel-title">Характеристики</th>
        <tr class="card__item__tabel-row" v-for="(item, index) in dataCharacteristic" :key="index">
            <td class="card__item__tabel-column-l">{{ item.name }}</td>
            <td class="card__item__tabel-column-r">{{ item.value }}</td>
        </tr>
    </table>
</template>