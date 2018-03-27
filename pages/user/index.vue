<template>
        <div>
            <h1 class="title">
                USER
            </h1>
            <h2 class="subtitle">
                User Section
            </h2>
            <p>
                The user dashboard collects essential information from <nuxt-link to="/user/agenda">Agenda</nuxt-link>, <nuxt-link to="/user/insigts">Insights</nuxt-link>, <nuxt-link to="/user/messages">Messages</nuxt-link>, <nuxt-link to="/user/profile">Profile</nuxt-link>, and <nuxt-link to="/user/updates">Updates</nuxt-link>.
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
