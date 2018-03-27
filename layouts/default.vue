<template>
    <div>
        <div style="height: 8vh; overflow: visible; position:fixed; top: 0; justify-content: center; align-items: center;">
            <navigate/>
        </div>
        <section>
            <nuxt/>
        </section>
        <div style="height: 8vh; overflow: visible; position:fixed; bottom: 0; justify-content: center;">
            <actions/>
        </div>
    </div>
</template>
<script>
  import Navigate from '../components/nav/Nav.vue'
  import Actions from '../components/nav/Actions.vue'

  export default {
    mounted () {
      this.fbCheckUser()
      this.getServer()
    },
    components: {Navigate, Actions},
    methods: {
      fbCheckUser () {
        return this.$store.dispatch('fbCheckUser')
      },
      getServer () {
        return this.$store.dispatch('getServer')
      }
    }
  }
</script>
