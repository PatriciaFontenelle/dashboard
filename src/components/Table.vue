<template>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr class="table-header">
                    <th v-for="(header, index) in data.headers" :key="index">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data.data" :key="index">
                    <td v-for="(header, index) in data.headers">
                        <div v-if="header === 'Actions'">
                            <button v-for="(action, index) in row.Actions" :key="index" class="icon-btn action-btn">
                                <font-awesome-icon :icon="`fa-solid ${action.icon}`" />
                            </button>
                        </div>
                        <div v-else>
                            {{ formatValue(row[header], header) }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { formatCurrency } from '../helpers/utils';
import { ref } from 'vue'
const props = defineProps(['data'])

function formatValue(value, header) {
    if (header == 'Price') {
        return formatCurrency(value)
    }

    return value;
}
</script>

<style scoped>
table {
    width: 100%;
}

th {
    font-weight: 500;
    text-align: start;
}

td {
    padding: .5em 0;
}

.action-btn {
    background-color: var(--primary-transparent);
    padding: .5em;
    border-radius: 5px;
}

.action-btn svg {
    color: var(--primary-color);
}
</style>