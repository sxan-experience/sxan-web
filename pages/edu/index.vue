<template>
        <div>
            <h1 class="title">
                EDU
            </h1>
            <h2 class="subtitle">
                Edu Section
            </h2>
            <p>
                If a user is not logged-in, the EDU section shall contain a listing of public and premium courses. For users logged-in, the EDU section will begin with their agendas within current courses, followed by recommended or referred courses, then finish up with a listing of public and premium courses.
            </p>
            <br>
            <nuxt-link to="/edu/example-course"><button>Course Example</button></nuxt-link>
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
