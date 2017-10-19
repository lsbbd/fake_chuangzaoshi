<template lang="html">
  <div class="body">

    <the-sidebar></the-sidebar>

    <div class="main">
      <div class="container">
        <toolbar></toolbar>
      </div>
    </div>
  </div>
</template>

<script>
  import Mock from 'mockjs'
  import theSidebar from './components/the-sidebar'
  import toolbar from './components/toolbar'

  export default {
    components: {
      theSidebar,
      toolbar
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
