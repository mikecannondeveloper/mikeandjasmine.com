// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'K & C Wedding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Mike and Jasmine's Wedding Website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    // Simple usage
    [
      '@nuxtjs/google-analytics', {
      id: 'UA-73202553-3'
      }
    ],
    'nuxt-webfontloader',
    [
      '@nuxtjs/recaptcha', {
        /* reCAPTCHA options */
        siteKey: '6LcjyNEUAAAAAEbjYR_6QHoJ9m1ubP7pv2_zVLGn',    // Site key for requests
        version: 3,     // Version
        size: 'invisible', // Size: 'compact', 'normal', 'invisible' (v2)
        hideBadge: true
      }
    ],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }],
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  webfontloader: {
    google: {
      families: ['Dancing+Script:300,400,600&display=swap','Libre+Baskerville:300,400,600&display=swap']
    }
  }
}
