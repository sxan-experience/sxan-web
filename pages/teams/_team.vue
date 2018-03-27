<template>
        <div>
            <h1 class="title">
                TEAMS
            </h1>
            <h2 class="subtitle">
                A Team
            </h2>
            <b>{{$route.params.team}}</b>
            <p>
                This is a profile page for teams. Includes images of the team, name, message wall, accomplishments (hustles/courses as verified by the industry's community), and their assets (articles, products/services, courses they instruct, hustles they host, and jobs they're hiring for.)
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
