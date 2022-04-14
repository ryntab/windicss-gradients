<template>
<article class="relative">
    <div @click="copyGradient" class="absolute flex p-2 text-white rounded-lg cursor-pointer hover:opacity-100 top-4 right-4 opacity-60 bg-dark-400">
        <span class="px-2"><pre>{{colors}}</pre></span>
        <icons-copy class="w-4 h-4" />
    </div>
    <div ref="gradient" class="h-64 rounded-3xl" :class="colors" />
</article>
</template>

<script>
export default {
    props: {
        colors: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            copyCode: '',
        }
    },
    computed: {
        card() {
            return this.overlap && '-mt-8'
        }
    },
    methods: {
        copyGradient() {
            this.code = this.gradient
            navigator.clipboard.writeText(this.colors)
            this.showToast()
        },
        showToast() {
            this.$toast.success('Copied ✨')
        }
    }
}
</script>
