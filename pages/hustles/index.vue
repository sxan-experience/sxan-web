<template>
        <div>
            <h1 class="title">
                HUSTLES
            </h1>
            <h2 class="subtitle">
                Hustles Section
            </h2>
            <p>
                Would you like to play a game? Hustles page lists first active hustles, ordered by time and importance. Following will list available hustles for a user can accept. Culminating, we'll list hustles completed by a user with the results and reminders of the value they got from them.
            </p>
            <nuxt-link to="/hustles/example-hustle">
                <button>Hustle Example</button>
            </nuxt-link>
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
