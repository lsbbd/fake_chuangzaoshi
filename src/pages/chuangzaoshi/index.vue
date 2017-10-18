<template lang="html">
  <div class="body">

    <the-sidebar></the-sidebar>

    <div class="main">

    </div>
  </div>
</template>

<script>
  import Mock from 'mockjs'
  import theSidebar from './components/the-sidebar'

  export default {
    components: {
      theSidebar
    },

    data() {
      return {
      }
    },

    created() {

    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
