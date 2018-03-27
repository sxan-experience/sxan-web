<template>
        <div>
            <h1 class="title">
                SHOP
            </h1>
            <h2 class="subtitle">
                A Product
            </h2>
            <b>{{$route.params.product}}</b>
            <p>
                Each product has a name, tags, category, seller, price, image, related/recommended products and services, comments, and an <b>Action Button</b> to configure/add product to cart.
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
