<template>
        <div>
            <h1 class="title">
                TEAMS
            </h1>
            <h2 class="subtitle">
                Teams Section
            </h2>
            <p>
                This page aggregates teams in listings, filtered and searchable. This lists images, names, and XP/levels of the teams along with a brief bio from their team profiles.
            </p>
            <nuxt-link to="/teams/example-team"><button>Team Example</button></nuxt-link>
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
