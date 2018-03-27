<template>
    <div>
        <form name="signup" v-if="$store.state.auth === 'signup'">
            <h3>Signup</h3>
            <span>
                <input placeholder="email" type="text" v-model="firebaseTest.email">
                <input placeholder="password" type="password" v-model="firebaseTest.password">
                <button type="button" v-on:click="fbSignup(firebaseTest)">Sign Up</button>
                <b v-on:click="$store.state.auth = 'login'">Already a player?</b>
            </span>
        </form>
        <form name="login" v-if="$store.state.auth === 'login'">
            <div v-if="!$store.state.fbUser.uid">
                <h3>Login</h3>
                <input placeholder="email" type="text" v-model="firebaseLogin.email">
                <input placeholder="password" type="password" v-model="firebaseLogin.password">
                <button type="button" v-on:click="fbLogin(firebaseLogin)">Firebase Login</button>
                <b v-on:click="$store.state.auth = 'signup'">New player?</b>

            </div>
        </form>
        <div v-if="$store.state.fbUser.uid">
            <h3>Welcome {{$store.state.fbUser.email}}</h3>
            <button v-on:click="fbLogout()">Logout</button>
        </div>
    </div>

</template>
<script>
  export default {
    created () {},
    data () {
      return {
        firebaseLogin: {},
        firebaseTest: {}
      }
    },
    computed: {},
    methods: {
      fbLogin (firebaseLogin) {
        return this.$store.dispatch('fbLogin', firebaseLogin)
      },
      fbLogout () {
        return this.$store.dispatch('fbLogout')
      },
      fbSignup (firebaseTest) {
        console.log('firebase signup from Auth.vue', JSON.stringify(firebaseTest, null, 2))
        return this.$store.dispatch('fbSignup', firebaseTest)
      },
      fbUpdate (firebaseContent) {
        firebaseContent.user = this.$store.state.fbUser.uid
        console.log('firebase update test from Test.vue', firebaseContent)
        return this.$store.dispatch('fbUpdate', firebaseContent)
      },
      fbRemove (firebaseContent) {
        firebaseContent.user = this.$store.state.fbUser.uid
        console.log('firebase remove test from Test.vue', firebaseContent)
        return this.$store.dispatch('fbRemove', firebaseContent)
      }
    }
  }
</script>
