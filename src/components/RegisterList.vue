<template>
    <div class="page-wrapper">
        <div class="page-title">
            {{ data.pageTitle }}
        </div>
        <section class="list-container">
            <header>
                <div class="header-left">
                    <SearchBar />
                </div>
                <div class="header-right">
                    <button class="icon-btn add-btn">
                        <font-awesome-icon style="font-size: 18px;" icon="fa-solid fa-plus" />
                        Add
                    </button>
                </div>
            </header>
            <div class="table-container">
                <Table :data="tableData" />
            </div>
        </section>

    </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
import Table from './Table.vue';
import { ref, h } from 'vue';

const tableData = ref({
    headers: ['Name', 'Storage', 'Price', 'Actions'],
    data: [
        {
            Name: 'iPhone 15',
            Storage: 34,
            Price: 989.0,
            Actions: [
                {
                    name: 'edit',
                    icon: 'fa-pen-to-square'
                }
            ]
        },
        {
            Name: 'iMac',
            Storage: 20,
            Price: 1200.0,
            Actions: [
                {
                    name: 'edit',
                    icon: 'fa-pen-to-square'
                }
            ],
        },
        {
            Name: 'Airpod',
            Storage: 100,
            Price: 99.0,
            Actions: [
                {
                    name: 'edit',
                    icon: 'fa-pen-to-square'
                }
            ]
        },
        {
            Name: 'Apple Watch',
            Storage: 38,
            Price: 299.0,
            Actions: [
                {
                    name: 'edit',
                    icon: 'fa-pen-to-square'
                }
            ]
        },
    ]
})
defineProps(['data'])

</script>

<style scoped>
/* LAYOUT */
.page-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.page-title {
    border-left: 3px solid var(--primary-color);
    padding-left: 5px;
    font-size: 1.25em;
    font-weight: 500;

}

/* HEADER */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.add-btn {
    height: 35px;
    background-color: var(--primary-transparent);
    padding: 1em;
    display: flex;
    gap: 5px;
    font-weight: 500;
    color: var(--primary-color);
    border-radius: 5px;
}

.add-btn svg {
    color: var(--primary-color);
}

/* LIST */

.list-container {
    background-color: var(--bg-white);
    padding: 20px;
    border-radius: 5px;
    flex-grow: 1;
}

.table-container {
    border-top: 1px solid var(--dark-500)
}
</style>