<template>
        <div>
            <h1 class="title">
                SHOP
            </h1>
            <h2 class="subtitle">
                Events Section
            </h2>
            <p>
                Events page consists of a calendar. The calendar can be toggled between day/week/month to list event names, producer/promoter, categories, tags, and an image. Search and filters apply.
            </p>
            <nuxt-link to="/shop/events/example-event"><button>Event Example</button></nuxt-link>
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
