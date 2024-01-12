<template>
    <div>
        <nav>
            <div class="sidebar" :class="{ collapsed: !menuOpened }">
                <div class="sidebar-logo">
                    <img class="logo" :src="`src/assets/logo/${menuOpened ? 'logo.png' : 'short-logo.png'}`"
                        alt="dash logo">
                </div>
                <div class="menu-container">
                    <button v-for="(item, index) in menuItems" @click="activeMenu = item.title" :key="index"
                        class="icon-btn menu-item" :class="{ active: activeMenu === item.title }">
                        <div class="menu-item-icon">
                            <font-awesome-icon :style="{ fontSize: '20px' }"
                                :icon="'fa-solid ' + item.icon" />
                        </div>
                        <div class="menu-item-title">
                            {{ item.title }}
                        </div>
                    </button>
                </div>
            </div>
            <div class="nav-content">
                <div class="nav-left">
                    <button @click="menuOpened = !menuOpened" class="icon-btn toogle-sidebar-mobile">
                        <font-awesome-icon :icon="menuOpened ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
                            :style="{ fontSize: '1.5em' }" />
                    </button>
                    <button @click="menuOpened = !menuOpened" class="icon-btn toogle-sidebar-desktop">
                        <font-awesome-icon :icon="menuOpened ? 'fa-solid fa-angles-left' : 'fa-solid fa-angles-right'"
                            :style="{ fontSize: '1em' }" />
                    </button>
                    <div class="username">
                        Hi, John!
                    </div>
                </div>
                <div class="nav-middle">
                    <img class="logo" src="../assets/logo/logo.png" alt="dash logo">
                </div>
                <div class="nav-right">
                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-regular fa-bell" :style="{ fontSize: '1.5em' }" />
                    </button>
                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-solid fa-user-circle" :style="{ fontSize: '2em' }" />
                    </button>
                </div>
            </div>

        </nav>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const menuOpened = ref(false);
        const activeMenu = ref("Dashboard")

        return {
            menuOpened,
            activeMenu
        }
    },

    data() {
        return {
            menuItems: [
                {
                    title: "Dashboard",
                    icon: 'fa-chart-simple'
                },
                {
                    title: "Settings",
                    icon: 'fa-gear'
                },
                {
                    title: "Logout",
                    icon: 'fa-arrow-right-from-bracket'
                },
            ]
        }
    }

}
</script>

<style scoped>
nav {
    padding: 20px 5%;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    z-index: 9999;
    position: relative;
}

.nav-right,
.nav-middle,
.nav-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    height: 100%;
}

.nav-left {
    justify-content: flex-start;
}

.nav-middle {
    justify-content: center;
}

.nav-right {
    justify-content: flex-end;
}

.sidebar {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-white);
    z-index: 9998;
    padding: calc(6vh + 40px) 20px 5%;
    transition: .5s ease;
}

.sidebar.collapsed {
    right: 100%;
    padding-inline: 0;
}

.sidebar-logo {
    display: none;
    height: 6vh;
    margin-bottom: 20px;
}

.menu-item {
    display: flex;
    padding: .75em;
    align-items: center;
    gap: 15px;
}

.menu-item.active > .menu-item-title,
.menu-item.active > .menu-item-icon > svg {
    fill: var(--primary-color);
    color: var(--primary-color);
    font-weight: 600;
}

.toogle-sidebar-desktop,
.username {
    display: none;
}

.logo {
    height: 100%;
}


@media screen and (min-width: 600px) {
    nav {
        display: flex;
        justify-content: end;
    }

    .nav-content {
        width: calc(100vw - (270px + 5%));
        transition: .5s ease;
    }

    .nav-middle,
    .toogle-sidebar-mobile {
        display: none;
    }

    .toogle-sidebar-desktop,
    .username {
        display: block;
    }

    .username {
        font-weight: 600;
    }

    .nav-middle {
        justify-content: flex-start;
    }

    .sidebar {
        max-width: 250px;
        padding-top: 20px;
        transition: .1s ease;
    }

    .sidebar.collapsed {
        width: 80px;
    }

    .sidebar.collapsed~.nav-content {
        width: calc(100vw - (100px + 5%));
    }

    .sidebar.collapsed  > .menu-container > .menu-item {
        justify-content: center;
        width: 100%;
    }

    .sidebar.collapsed > .menu-container > .menu-item > .menu-item-title {
        display: none;
    }

    .sidebar-logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>