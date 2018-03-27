<template>
        <div>
            <h1 class="title">
                JOBS
            </h1>
            <h2 class="subtitle">
                Jobs Section
            </h2>
            <p>The jobs section has a map with markers labelling jobs and gigs with a text-list of the same. There should be a search/filter section to fine-tune listings.</p>
            <nuxt-link to="/jobs/example-job"><button>Job Example</button></nuxt-link>
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
