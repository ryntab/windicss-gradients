<template>
  <div class="bg-dark-900">
    <shared-announcement />
    <shared-header />
    <main>
      <Nuxt />
    </main>
    <shared-footer />
  </div>
</template>

<style lang="postcss">
.toasted-container.notification-container.bottom-center {
  @apply max-w-xs mx-auto p-4;
}

.toasted.notification.toasted-primary.success {
  @apply bg-white text-dark-600 font-bold rounded-lg px-6 py-4 shadow-xl justify-center;
}
</style>
