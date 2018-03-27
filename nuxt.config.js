module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3bbd86' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#000000'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /* GENERATE Options */
  generate: {
    dir: '../sxan-server/public'
  },
  /* Plugins */
  plugins: [
    { src: './components/util/Icon.vue' }
  ]
}
