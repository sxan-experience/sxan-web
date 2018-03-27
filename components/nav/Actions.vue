<template>
  <span style="width: 100vw; padding: 1vh;">
      <div v-on:click="openAction = !openAction"
           style="height: 10vh; width: 10vh; border-radius: 100%; box-shadow: 0 0 2px black" class="center-all">
          <icon fa="microphone" class="fa-2x"></icon>
      </div>
      <span style="justify-content: flex-end">
          <span v-if="openAction">
              <nuxt-link to="/user">
                  <icon fa="user"/> User
              </nuxt-link>
              <nuxt-link to="/user/agenda">
                  <icon fa="calendar-o"/> Agenda
              </nuxt-link>
              <nuxt-link to="/user/insights">
                  <icon fa="bar-chart"/> Insights
              </nuxt-link>
              <nuxt-link to="/user/messages">
                  <icon fa="comments-o"/> Messages
              </nuxt-link>
              <nuxt-link to="/user/profile">
                  <icon fa="user-circle-o"/> Profile
              </nuxt-link>
              <nuxt-link to="/user/settings">
                  <icon fa="gears"/> Settings
              </nuxt-link>
              <nuxt-link to="/user/updates">
                  <icon fa="globe"/> Updates
              </nuxt-link>
          </span>
      <div v-on:click="openAction = !openAction"
           style="height: 10vh; width: 10vh; border-radius: 100%; box-shadow: 0 0 2px black" class="center-all">
          <icon fa="circle" class="fa-2x"></icon>
      </div>
    </span></span>
</template>
<script>
  import Icon from '../util/Icon'

  export default {
    components: {Icon},
    data () {
      return {
        openAction: false
      }
    }
  }
</script>
