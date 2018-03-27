<template>
        <div>
            <h1 class="title">
                PLAYERS
            </h1>
            <h2 class="subtitle">
                A Player
            </h2>
            <b>{{$route.params.player}}</b>
            <p>
                This is a profile page for other players, not the current user -- but it closely matches. Includes images of the player, name, message wall, accomplishments (hustles/courses as verified by the industry's community), and their assets (articles, products/services, courses they instruct, and hustles they host.)
            </p>
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
