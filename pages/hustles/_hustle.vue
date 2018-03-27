<template>
        <div>
            <h1 class="title">
                HUSTLES
            </h1>
            <h2 class="subtitle">
                A Hustle
            </h2>
            <b>{{$route.params.hustle}}</b>
            <p>
                A yet-to-be-accepted hustle contains a description of hustle, who published it, time allotted, and what rewards are provided for successful completion. A hustle that's accepted displays steps and directions for each step, time left to complete, and a message/comment area to communicate with other players or the hustle publisher. A hustle that's been completed lists the outcome (pass/fail) and any rewards gained from the experience.
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
