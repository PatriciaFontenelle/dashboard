<template>
    <div class="layout-container">
        <nav :class="{ collapsed: !menuOpened }">
            <img class="desktop-content" :src="`/src/assets/logo/${menuOpened ? 'logo.png' : 'short-logo.png'}`" alt="">
            <div class="menu-items-container">
                <div v-for="(item, index) in menuItems" :key="index">
                    <button v-if="!item.submenus" class="icon-btn menu-item" :class="{ active: activeMenu === item.title }"
                        @click="selectMenu(item)">
                        <div class="menu-item-icon">
                            <font-awesome-icon :icon="`fa-solid ${item.icon}`" />
                        </div>
                        <div class="menu-item-title">
                            {{ item.title }}
                        </div>
                    </button>
                    <Dropdown :item="item" :collapsed="!menuOpened" @setActiveMenu="(item) => selectMenu(item)"
                        @setCollapsed="(value) => menuOpened = !value" :activeMenu="activeMenu" v-if="item.submenus" />
                </div>
                <div class="logout-item">
                    <button class="icon-btn menu-item logout-btn">
                        <div class="menu-item-icon">
                            <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                        </div>
                        <div class="menu-item-title">
                            Logout
                        </div>
                    </button>
                </div>
            </div>
        </nav>
        <header>
            <div class="header-left">
                <button class="icon-btn desktop-content nav-toogle" @click="menuOpened = !menuOpened">
                    <font-awesome-icon :icon="`fa-solid fa-angles-${menuOpened ? 'left' : 'right'}`" />
                </button>
                <button class="icon-btn mobile-content" @click="menuOpened = !menuOpened">
                    <font-awesome-icon :icon="`fa-solid ${menuOpened ? 'fa-xmark' : 'fa-bars'}`" />
                </button>
            </div>
            <div class="header-middle">
                <img class="mobile-content" src="/src/assets/logo/logo.png" alt="dash logo">
            </div>
            <div class="header-right">
                <span class="username">
                    Hello, John!
                </span>
                <button class="icon-btn user-avatar">
                    <font-awesome-icon style="font-size: 30px;" icon="fa-solid fa-user-circle" />
                </button>

            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Dropdown from './Dropdown.vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();

const menuOpened = ref(true);
const activeMenu = ref("Dashboard");

const menuItems = ref([
    {
        title: "Dashboard",
        icon: 'fa-chart-simple',
        path: "/dashboard"
    },
    {
        title: "Cadastro",
        icon: "fa-file-pen",
        path: "/teste",
        submenus: [
            {
                title: "Products",
                icon: "",
                path: "/register/products"
            },
            {
                title: "Employees",
                icon: "",
                path: "/register/employees"
            },

        ],
    },
    {
        title: "Settings",
        icon: 'fa-gear',
        path: "/settings"
    }
])

function selectMenu(menu) {
    this.activeMenu = menu.title;
    router.push(menu.path)

}
</script>

<style scoped>
.layout-container {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

/* NAV */
nav {
    background-color: var(--bg-white);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    transition: width .3s linear;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav.collapsed {
    width: 80px;
}

.nav-toogle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -32.5px;
    background-color: var(--primary-color);
}

.nav-toogle > svg {
    font-size: 12px;
    color: var(--bg-white);
}

nav img {
    height: 40px;
}

.menu-items-container {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}

.menu-item {
    padding: .75em;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}

.menu-item:hover {
    background-color: var(--secondary-color);
}

.active .menu-item-title,
.active .menu-item-icon>svg {
    color: var(--primary-color);
    font-weight: bold;
    transition: .2s ease;
}


.menu-item-icon {
    font-size: 18px;
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

nav.collapsed .menu-item-title {
    opacity: 0;
    width: 0;
}

.logout-item {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.logout-btn {
    border-radius: 5px;
    color: var(--dark-900) !important;
    display: flex;
    justify-content: center;
    background-color: var(--primary-transparent);
}

.logout-btn .menu-item-title {
    color: var(--primary-color) !important;
    font-weight: bold;
    width: fit-content;
}

/* document.querySelector("#app > div > nav > div > div.logout-item > button > div.menu-item-icon > svg > path") */
.logout-btn .menu-item-icon>svg {
    color: var(--primary-color) !important;
}

/* HEADER */
header {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    left: 250px;
    width: calc(100vw - 250px);
    height: 60px;
    transition: .3s linear;
}

nav.collapsed~header {
    left: 80px;
    width: calc(100vw - 80px);
}

.header-left,
.header-middle,
.header-right {
    display: flex;
    align-items: center;
    flex: 1;
}

.header-left {
    gap: 10px;
}

.header-middle {
    justify-content: center;
}

.header-right {
    justify-content: flex-end;
}

/* MAIN */
main {
    height: calc(100vh - 60px);
    padding: 20px;
    overflow: auto;
    position: relative;
    width: calc(100vw - 250px);
    left: 250px;
    transition: .3s linear;
}

nav.collapsed~main {
    left: 80px;
    width: calc(100vw - 80px);
}

/* OTHERS */

.mobile-content {
    display: none;
}

@media screen and (max-width: 576px) {

    /* NAV */
    nav {
        width: 100%;
        padding-top: 60px;
        z-index: 10000;
        transition: left .3s linear;
    }

    nav.collapsed {
        left: -100%;
    }

    /* HEADER */
    header,
    nav.collapsed~header {
        background-color: var(--bg-white);
        left: 0;
        width: 100%;
        z-index: 100001;
    }

    .header-left>.username {
        display: none;
    }

    .header-middle img {
        height: 35px;
    }

    /* MAIN */
    main,
    nav.collapsed~main {
        left: 0;
        width: 100%;
    }

    /* OTHERS */
    .mobile-content {
        display: block;
    }

    .desktop-content {
        display: none;
    }
}
</style>