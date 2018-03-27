<template>
  <span style="width: 100vw; padding: 1vh;">
    <span>
        <div v-on:click="openSearch = !openSearch"
             style="height: 10vh; width: 10vh; border-radius: 100%; box-shadow: 0 0 2px black" class="center-all">
          <icon fa="search" class="fa-2x"></icon>
      </div>
      <input v-if="openSearch" type="text" placeholder="Search">
    </span>
    <b v-on:click="openNav = !openNav">
        <img src="/sxan-logo.png" style="height:6vh; min-height: 16px;" alt="">
    </b>
    <span class="float-right" v-if="openNav">
      <nuxt-link to="/">
          <icon fa="home"/>
          <!-- icon i="announcement"/ -->
      </nuxt-link>
      <nuxt-link to="/hustles">
          <icon fa="exclamation"/><icon fa="exclamation"/><icon fa="exclamation"/> Hustles
          <!-- icon i="announcement"/ -->
      </nuxt-link>
      <nuxt-link to="/shop">
          <icon fa="shopping-basket"/> Shop
          <!-- icon i="shopping basket"/ -->
      </nuxt-link>
      <nuxt-link to="/edu">
          <icon fa="graduation-cap"/> EDU</nuxt-link>
      <nuxt-link to="/news">
          <icon fa="newspaper-o"/> News</nuxt-link>
      <nuxt-link to="/jobs">
          <icon fa="handshake-o"/> Jobs
      </nuxt-link>
      <nuxt-link to="/players">
          <icon fa="user-o"/> Players
      </nuxt-link>
      <nuxt-link to="/teams">
          <icon fa="users"/> Teams
      </nuxt-link>
      <nuxt-link to="/admin">
          <icon fa="dashboard"/> Admin
      </nuxt-link>
        <nuxt-link to="/testing">
          <icon fa="lightbulb-o"/> Tests
      </nuxt-link>
    </span>
  </span>
</template>
<script>
  import Icon from '../util/Icon'

  export default {
    components: {Icon},
    data () {
      return {
        openNav: false,
        openSearch: false
      }
    }
  }
</script>
<style>
    .float-right {
        text-align: end;
    }
</style>
