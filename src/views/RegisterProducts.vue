<template>
    <div>
        <RegisterList :data="data" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RegisterList from '../components/RegisterList.vue';

const data = ref({
    pageTitle: "Products"
})

</script>

<style></style>