<template>
        <div>
            <h1 class="title">
                SHOP
            </h1>
            <h2 class="subtitle">
                Products Section
            </h2>
            <p>
                The products will be categorized specifically by an industry and have a sub-navigation with top categories. Search and filter applies. On this listing page, each product should have a price, image, title, and seller.
            </p>
            <nuxt-link to="/shop/products/example-product"><button>Product Example</button></nuxt-link>


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
