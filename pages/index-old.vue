<template>
    <span class="space-around" style="height:82vh">
        <div class="center-all">
            <logo/>
            <h2 class="subtitle">
                Human Productivity Game
            </h2>
            <div>
                <div v-if="online">
                    <icon i="cloud_done"/> Online
                </div>
                <div v-if="!online">
                    <icon i="cloud_off"/> Offline
                </div>
            </div>
            <br>
            <test/>
            <p>We 'effin rock.</p>
        </div>
    </span>

</template>

<script>
  import Logo from '~/components/util/Logo.vue'
  import Test from '~/components/util/Test.vue'
  import Icon from '~/components/util/Icon.vue'

  export default {
    components: {Logo, Test, Icon},
    data () {
      return {
        online: true
      }
    },
    asyncData ({ isStatic, isServer }) {
      return {
        name: isStatic ? 'static' : (isServer ? 'server' : 'client')
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

<style>
    .network {
        font-weight: 400;
        font-size: 1rem;
    }

    .network .circle {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: green;
        padding: .1rem .5rem;
        border-radius: 1rem;
    }

    .network.offline .circle {
        background: red;
    }
</style>
