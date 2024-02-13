<template>
    <div class="search-container">
        <input placeholder="Search" class="search-input" type="text" v-model="searchText">
        <button v-if="searchText === ''" class="search-btn" @click="$emit('onSearch', searchText)">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button v-if="searchText !== ''" class="clear-search-btn" @click="searchText = ''">
            <font-awesome-icon style="font-size: 18px;" icon="fa-solid fa-xmark" />
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const searchText = ref("");
const emits = defineEmits(['onSearch'])
</script>

<style scoped>
.search-container {
    border: 2px solid var(--primary-color);
    padding: .5em 1.5em;
    display: flex;
    align-items: center;
    border-radius: 50px;
    height: 35px;
    position: relative;
}

.search-input {
    border: none;
    outline: none;
    margin-right: 24px;
    background-color: transparent;
}

.search-btn,
.clear-search-btn {
    background-color: var(--primary-color);
    border: none;
    outline: none;
    height: 33px;
    width: 33px;
    position: absolute;
    top: 0px;
    right: -2px;
    border-radius: 0 50px 50px 0;
}

.search-btn svg,
.clear-search-btn svg {
    color: var(--bg-white);
}
</style>