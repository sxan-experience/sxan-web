<template>
        <div>
            <h1 class="title">
                USER
            </h1>
            <h2 class="subtitle">
                Updates Section
            </h2>
            <p>
                Updates are a chronological list of communications from us or their various networks. Whenever an activity on the app takes place on this user's assets or assets they are involved in, and update will be generated. The list of updates has an icon denoting update type, brief text explaining the update, and may contain buttons to act on the update (i.e. user get's updated that a hustle is ending soon and can touch a button to go to hustle page or a job listing along their interests has just been published, button takes them directly to that page.)
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
