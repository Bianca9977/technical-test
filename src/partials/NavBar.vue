<template>
    <nav>
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <img class="h-8 w-auto" src="images/Shopster_logo.svg" alt="Shopster Logo">
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex justify-center text-lg">
                        <router-link @click="trackPage('/')" to="/" class="mx-6" :class="[(activePage == '/') ? 'active' : '']">CONCURS</router-link>
                        <router-link @click="trackPage('/castigatori')" to="/castigatori" class="mx-6" :class="[(activePage == '/castigatori') ? 'active' : '']">CÂȘTIGĂTORI</router-link>
                        <router-link @click="trackPage('/regulament')" to="/" class="mx-6" :class="[(activePage == '/regulament') ? 'active' : '']">REGULAMENT</router-link>
                    </div>
                </div>
                <div class="flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button @click="toggleMenu" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <svg class="block h-12 w-12" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> 
                    </button>
                </div>
            </div>
        </div>

        <div :class="[isMenuOpen ? 'block' : 'hidden']" class="sm:hidden" id="mobile-menu">
            <div class="p-3 flex flex-col">
                <router-link @click="closeMenu(); trackPage('/')" to="/" class="py-4" :class="[(activePage == '/') ? 'active' : '']">CONCURS</router-link>
                <router-link @click="closeMenu(); trackPage('/castigatori')" to="/castigatori" class="py-4" :class="[(activePage == '/castigatori') ? 'active' : '']">CÂȘTIGĂTORI</router-link>
                <router-link @click="closeMenu(); trackPage('/regulament')" to="/" class="py-4" :class="[(activePage == '/regulament') ? 'active' : '']">REGULAMENT</router-link>
            </div>
        </div>
    </nav>
</template>
   
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isMenuOpen: false,
            activePage: '',
        }
    },
    mounted() {
       this.activePage = this.$route.fullPath;
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },

        closeMenu() {
            this.isMenuOpen = false;
        },

        trackPage(page) {
            this.activePage = page;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
nav {
    background-color: $primary-background;
    color: $neutral-background;
    font-family: $font-bold;
}

a {
    &:hover {
        color: $primary-accent;
        transition: 0.5s all;
    }

    &.active {
        color: $primary-accent;
    }
}
</style>
   