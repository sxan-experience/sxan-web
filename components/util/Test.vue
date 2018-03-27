<template>
    <div>
        <button v-on:click="$store.dispatch('create', {type:'report', data: {user:'test', name:'test', cat:'test', tags: ['test', 'test1'], body:['Once upon a time.', 'chicken little caught a flag', 'The second type of object implemented is a model/coder. Huffman and RangeCoder share the same interface as the simple context-0 probability models MTFModel, FenwickModel, LogDistanceModel, and DeflateDistanceModel. '], author:'mark candaras'}})">
            Transact
        </button>
        <button v-on:click="live = live === 1 ? 0 : 1">Test</button>
        <div v-if="live === 1">
            <p>This is a test</p>
            <b>This is a view</b>
            <b>{{$store.state.test}}</b>3
            <p>{{$store.state.counter}}</p>
            <div>
                <button v-on:click="test()">Test</button>
                <!-- Lame attempt to deal with FB Rules through REST<div>
                    <button v-on:click="getRules({hi:'im the rules'})">Get Rules</button>
                    <b>Rules: {{$store.state.rules}}</b>
                    <h3>Set Rules</h3>
                    <span>

                    </span>
                </div>-->
                <div>
                    <h3>Firebase signup</h3>
                    <span>
                        <input placeholder="email" type="text" v-model="firebaseTest.email">
                        <input placeholder="password" type="text" v-model="firebaseTest.password">
                        <button v-on:click="asyncFB(firebaseTest)">Firebase Async</button>
                    </span>
                </div>
                <div>
                    <div v-if="!$store.state.fbUser.uid">
                        <span>
                            <h3>Firebase Login</h3>
                            <button v-on:click="fbCheckUser()">Check User</button>
                        </span>
                        <input placeholder="email" type="text" v-model="firebaseLogin.email">
                        <input placeholder="password" type="text" v-model="firebaseLogin.password">
                        <button v-on:click="fbLogin(firebaseLogin)">Firebase Login</button>
                    </div>
                </div>
                <div>
                    <h3>Firebase Push</h3>
                    <span>
                        <input placeholder="name" type="text" v-model="firebaseContent.name">
                        <input placeholder="age" type="number" v-model="firebaseContent.age">
                        <p>Data:  {{$store.state.fbData}}</p>
                        <button v-on:click="fbPush(firebaseContent)">Firebase Push Data</button>
                    </span>
                </div>
                <div>
                    <h3>Firebase Patch</h3>
                    <span>
                        <input placeholder="name" type="text" v-model="firebaseContent.name">
                        <button v-on:click="fbPatch(firebaseContent)">Firebase Patch Data</button>
                    </span>
                </div>
                <div>
                    <h3>Firebase Update</h3>
                    <span>
                        <input placeholder="name" type="text" v-model="firebaseContent.name">
                        <button v-on:click="fbUpdate(firebaseContent)">Firebase Update Data</button>
                    </span>
                </div>
                <p>
                    <input type="text" v-model="id">
                    <button v-on:click="getData(id)">Get Data</button>

                </p>
                <input type="text" v-model="payload.text">
                <input type="number" v-model="payload.age">
                <button v-on:click="postNedbData(payload)">Post Nedb Data</button>
                <p>
                    test:{{resData}}
                </p>
                <p>
                    getData:{{$store.state.resData}}
                </p>
                <p>
                    getNedbData:{{$store.state.nedbData}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        firebaseTest: {},
        firebaseLogin: {},
        firebaseContent: {},
        live: 0,
        localStorage: this.$store,
        resData: {},
        fbUser: {},
        id: '',
        payload: {
          text: 'null',
          age: 0
        },
        rules: {}
      }
    },
    asyncData () {
      return {
        respData: 21,
        rules: {test: 'yep'},
        fire: (() => {
          console.log(window.localStorage, this.$store)
        })()
      }
    },
    computed: {},
    methods: {
      firebase (firebaseTest) {
        return this.$store.dispatch('firebase', firebaseTest)
      },
      asyncFB (firebaseTest) {
        console.log('firebase test from Test.vue', firebaseTest)
        return this.$store.dispatch('asyncFB', firebaseTest)
      },
      fbCheckUser () {
        console.log('firebase check user test from Test.vue')
        return this.$store.dispatch('fbCheckUser')
      },
      fbLogin (firebaseLogin) {
        console.log('firebase login test from Test.vue', firebaseLogin)
        return this.$store.dispatch('fbLogin', firebaseLogin)
      },
      fbLogout () {
        console.log('firebase logout test from Test.vue')
        return this.$store.dispatch('fbLogout')
      },
      fbPush (firebaseContent) {
        console.log('firebase push test from Test.vue', firebaseContent)
        if (this.$store.state.fbUser) {
          firebaseContent.user = this.$store.state.fbUser.uid
          // this.$store.dispatch('fbPush', firebaseContent)
          return this.$store.dispatch('fbCreate', firebaseContent)
        }
      },
      fbPatch (firebaseContent) {
        firebaseContent.user = this.$store.state.fbUser.uid
        console.log('firebase patch test from Test.vue', firebaseContent)
        return this.$store.dispatch('fbPatch', firebaseContent)
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
      },
      example () {
        return this.$store.commit('test')
      },
      test () {
        return axios.get('https://scanna.firebaseio.com/comments/-KjjKELK4uQM_lEDdRRw.json')
          .then((res) => {
            console.log(res.data, this.$store.state.resData)
            this.resData = res.data
          })
      },
      getData (id) {
        this.$store.commit('getData')
        this.$store.commit('getNedbData', id)
        this.$store.commit('increment')
      },
      postNedbData (payload) {
        payload.age = parseInt(payload.age)
        this.$store.commit('postNedbData', payload)
      }
    }
  }
</script>

<style>

</style>
