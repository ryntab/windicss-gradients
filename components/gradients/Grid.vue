<template>
<section>
    <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-4 mx-auto sm:px-6 lg:px-8 sm:grid-cols-4 lg:grid-cols-4">
        <gradients-card v-observe-visibility="{
  callback: visibilityChanged,
   root: 800,
}" v-for="gradient of gradients" :key="gradient.id" :name="gradient.name" :colors="gradient.colors" :direction="gradient.direction" :version="gradient.version" :controls="directions" :overlap="overlap" v-on="$listeners" />
    </div>
</section>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

export default {
    props: {
        gradients: {
            type: Array,
            required: true
        },
        directions: {
            type: Boolean,
            default: true
        },
        overlap: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        visibilityChanged(isVisible, entry) {
            this.isVisible = isVisible
            if (isVisible) {
                this.$anime({
                    targets: entry.target._vue_visibilityState.el,
                    scale: [.95, 1],
                    translateY: ['10%', '0%'],
                    opacity: [.9, 1],
                    duration: 800,
                    easing: 'easeInOutElastic(0, .9)',
                })
            }
        }
    }
}
</script>
