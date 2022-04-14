<template>
<div>
    <shared-banner title="Windi Gradients" subtitle="CoolHue Gradients for Windi CSS">
        Creating gradient colors has always been a hassle, in v3.1 gradient color defaults based on <a class="tracking-wide text-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-500 bg-clip-text" href="https://webkul.github.io/coolhue/">Coolhue</a> were added to Windi CSS.
    </shared-banner>
    <gradients-grid :gradients="gradients" />
</div>
</template>

<script>
import {
    gradients
} from '~/assets/data/gradients'

export default {
    computed: {
        gradients() {
            return gradients
        }
    }
}
</script>
