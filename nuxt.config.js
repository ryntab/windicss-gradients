export default {
  target: 'static',
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | Windi Gradients`
        : 'Gradient Presets for Windi CSS 🍃'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '' },
      {
        property: 'og:title',
        content: 'Gradient Presets for Windi CSS 🍃'
      },
      {
        property: 'og:description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.'
      },
      { property: 'og:image', content: '' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: '' },
      {
        property: 'twitter:title',
        content: 'Gradient Presets for Windi CSS 🍃'
      },
      {
        property: 'twitter:description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.'
      },
      {
        property: 'twitter:image',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }]
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,
  },
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/google-fonts', '@nuxtjs/toast','nuxt-windicss','nuxt-animejs'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 900]
    }
  },
  sitemap: {
    hostname: ''
  },
  toast: {
    position: 'bottom-center',
    duration: 2000,
    className: 'notification',
    containerClass: 'notification-container'
  },
  robots: {
    UserAgent: '*'
  }
}
