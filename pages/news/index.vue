<template>
        <div>
            <h1 class="title">
                NEWS
            </h1>
            <h2 class="subtitle">
                News Section
            </h2>
            <p>
                The News congregates articles for an industry. Each industry will have top categories and trending tags. All industries will list new articles, as well. Only the headings and images are shown on group pages.
            </p>
            <nuxt-link to="/news/example-article"><button>Article Example</button></nuxt-link>

        </div>
</template>

<script>

  export default {
    components: {},
    data () {
      return {
        online: true
      }
    },
    computed: {},
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({type}) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>
