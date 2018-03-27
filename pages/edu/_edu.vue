<template>
        <div>
            <h1 class="title">
                EDU
            </h1>
            <h2 class="subtitle">
                A Course
            </h2>
            <p>{{$route.params.edu}}</p>
            <p>The course page contains a <b>Course Component</b>. The <b>Course Component</b> contains an introduction, lessons made up of topics, testing/hustles, and a forum. The forum is separated into channels for general conversation, lessons, topics, and by class enrollment where applicable. </p>
            <div :class="['network',online ? 'online' : 'offline']">
                <div class="circle"></div>
                {{ online ? 'online' : 'offline' }}
            </div>
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
