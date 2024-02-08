<template>
    <div class="dropdown-container">
        <button class="icon-btn dropdown-toogle" :class="{ collapsed: collapsed }" @click="opened = !opened">
            <div class="menu-item-icon">
                <font-awesome-icon :icon="`fa-solid ${item.icon}`" />
            </div>
            <div class="menu-item-title">
                {{ item.title }}
            </div>
            <div class="toogle-arrow">
                <font-awesome-icon :icon="`fa-solid fa-caret-${opened ? 'up' : 'down'}`" />
            </div>
        </button>
        <transition name="fade">
            <div v-if="opened && !collapsed" class="sub-menu-container">
                <button class="icon-btn submenu-item" v-for="(menu, index) in item.submenus" :key="index"
                    @click="$emit('setActiveMenu', menu)" :class="{active: activeMenu === menu.title}">
                    {{ menu.title }}
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const opened = ref(true);
const activeItem = ref("");

defineProps(['item', 'collapsed', 'activeMenu'])
defineEmits(['setActiveMenu'])

</script>

<style>
.dropdown-toogle {
    padding: .75em;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.menu-item-icon {
    font-size: 18px;
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.menu-item-title {
    flex-grow: 1;
    text-align: left;
}

.collapsed .menu-item-title,
.collapsed .toogle-arrow {
    display: none;
}

.toogle-arrow {
    width: 25px;
}

.submenu-item {
    padding: .75em;
    padding-left: 53px;
    width: 100%;
}

.submenu-item.active {
    color: var(--primary-color);
    font-weight: bold;
}

.submenu-item:hover {
    background-color: var(--secondary-color);
}

/* ANIMATIONS */
.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity .5s ease;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity .2s linear;
}
</style>