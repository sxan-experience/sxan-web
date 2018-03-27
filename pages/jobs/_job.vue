<template>
        <div>
            <h1 class="title">
                JOBS
            </h1>
            <h2 class="subtitle">
                A Job
            </h2>
            <b>{{$route.params.job}}</b>
            <p>Each job has description of work, payment or reward, description of the company, and a map for location. Certain jobs may have requirements, such as specific courses or hustles completed successfully. These requirements will be displayed before an <b>Action Button</b> to apply for the job is activated.</p>
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
