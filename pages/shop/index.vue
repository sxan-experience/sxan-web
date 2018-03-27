<template>
        <div>
            <h1 class="title">
                SHOP
            </h1>
            <h2 class="subtitle">
                Events, Products, and Services
            </h2>
            <p>
                <nuxt-link to="/shop/events">Events</nuxt-link>
                <nuxt-link to="/shop/products">Products</nuxt-link>
                <nuxt-link to="/shop/services">Services</nuxt-link>
            </p>
            <p>
                This is a portal to the markets. We want a few select examples of each link above, likely some based on merit and some sponsored.
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
