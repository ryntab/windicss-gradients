<template>
<section class="relative text-center">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 lg:py-32">
        <div class="w-40 mx-auto">
            <icons-windi />
        </div>
        <h1 class="mt-1 text-4xl font-bold text-white tracking-tighest" v-text="title" />
        <div class="flex flex-col max-w-3xl mx-auto">
            <h2 class="order-first font-medium tracking-wide text-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-white-500 bg-clip-text" v-text="subtitle" />
        </div>
        <p class="max-w-2xl mx-auto mt-8 font-medium text-white text-md">
            <slot />
        </p>
    </div>
</section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>
