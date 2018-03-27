<template>
    <span class="space-around" style="height:82vh">
        <div v-if="!$store.state.fbUser.uid" class="center-all">
            <h1>Do you want to play?</h1>
            <br>
            <span class="space-around" v-on:click="openAuth = !openAuth; ">
                <button v-if="!openAuth" class="button"
                        v-on:click="$store.state.auth = 'signup';"><h1>New Game</h1></button>
                <button v-if="!openAuth" class="button"
                        v-on:click="$store.state.auth = 'login';"><h1>Continue</h1></button>
            </span>
            <br>
        </div>
        <span v-if="openAuth" v-on:click="openAuth = !openAuth">
            <button class="button" v-on:click="$store.state.auth = '';"><h1><icon
                    fa="arrow-left"></icon> Go Back</h1></button>
        </span>
        <auth v-if="openAuth"></auth>
        <auth v-if="!openAuth && $store.state.fbUser.uid"></auth>
        <!--<div v-if="$store.state.fbUser.uid">
            <h1>
                Welcome {{$store.state.fbUser.email}}
            </h1>
            <div>
              <button v-on:click="fbLogout()">Logout</button>
              &lt;!&ndash;<span>
                <i>Email: <b>{{$store.state.fbUser.email}}</b> <br></i>
                <i>UID: <b>{{$store.state.fbUser.uid}}</b></i>
                <i>Verified: <b>{{$store.state.fbUser.emailVerified}}</b></i>
              </span>&ndash;&gt;
            </div>
        </div>-->

    </span>

</template>

<script>
  import Auth from '~/components/actions/Auth.vue'
  import Logo from '~/components/util/Logo.vue'
  import Test from '~/components/util/Test.vue'
  import Icon from '~/components/util/Icon.vue'

  export default {
    components: {Logo, Test, Icon, Auth},
    data () {
      return {
        online: true,
        openAuth: false
      }
    },
    asyncData ({isStatic, isServer}) {
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
      fbLogout () {
        console.log('firebase logout test from Test.vue')
        return this.$store.dispatch('fbLogout')
      },
      fbCheckUser () {
        return this.$store.dispatch('fbCheckUser')
      },
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
