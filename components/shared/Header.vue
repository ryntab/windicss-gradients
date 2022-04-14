<template>
<header class="sticky top-0 z-50 text-sm font-medium text-white border-b bg-dark-800 border-gray-800/75">
    <div class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <nav class="hidden sm:items-center sm:space-x-4 lg:space-x-8 sm:flex">
            <nuxt-link :to="{ name: 'index' }">
                Gradients
            </nuxt-link>
        </nav>
        <div class="hidden sm:items-center sm:flex sm:space-x-4 lg:space-x-8">
            <a href="https://github.com/windicss/nuxt-windicss" target="_blank" rel="noreferrer">
                <span aria-hidden="true" role="img">🍃</span>
            </a>
            <header-github />
        </div>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            mobile: false
        }
    },
    computed: {
        navigation() {
            return navigation
        }
    },
    watch: {
        $route() {
            this.mobile = false
        }
    },
    methods: {
        toggleMobile() {
            this.mobile = !this.mobile
        }
    }
}
</script>
