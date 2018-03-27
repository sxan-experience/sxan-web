<template>
    <i :class="i ? 'material-icons' : fa ? 'fa fa-' + fa : ''" aria-hidden="true">{{i ? i : ''}}</i>
</template>
<script>
  export default {
    props: ['i', 'fa']
  }
</script>
