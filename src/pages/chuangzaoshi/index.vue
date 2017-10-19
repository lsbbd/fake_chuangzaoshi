<template lang="html">
  <div class="body">
    <the-header></the-header>

    <aside class="sidebar" :class="{active: sidebarActive}">
      <the-sidebar></the-sidebar>
    </aside>

    <div class="main">
      <div class="wrapper">
        <toolbar></toolbar>

      </div>
    </div>
  </div>
</template>

<script>
  import Mock from 'mockjs'
  import theSidebar from './components/the-sidebar'
  import toolbar from './components/toolbar'
  import theHeader from './components/the-header'

  export default {
    components: {
      theSidebar,
      toolbar,
      theHeader
    },

    data() {
      return {
        sidebarActive: false
      }
    },

    created() {

    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
