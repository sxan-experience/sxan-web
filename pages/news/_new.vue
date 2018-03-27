<template>
        <div>
            <h1 class="title">
                NEWS
            </h1>
            <h2 class="subtitle">
                An Article
            </h2>
            <b>{{$route.params.new}}</b>
            <p>
                Articles have their categories and tags, date of publish, a header image, body of text and media, author and brief bio, comments, and related/recommended articles.
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
