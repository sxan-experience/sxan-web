<template>
    <section>
        <div>
            <h1 class="title">Error</h1>
            <b v-if="error.statusCode === 404">Page not found</b>
            <h1 v-else>An error occurred</h1>
            <br>
            <nuxt-link to="/">Home page</nuxt-link>
        </div>
    </section>
</template>

<script>
  export default {
    props: ['error']
  }
</script>
