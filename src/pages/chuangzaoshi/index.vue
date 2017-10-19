<template lang="html">
  <div class="body">
    <header>
      <div class="button" :class="{active: sidebarActive}" @click="toggleSidebar()">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="logo">
        <img src="http://chuangzaoshi.com/assets/images/logo_mobile.svg" alt="">
      </div>
    </header>

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

  export default {
    components: {
      theSidebar,
      toolbar
    },

    data() {
      return {
        sidebarActive: false
      }
    },

    methods: {
      toggleSidebar() {
        this.sidebarActive = !this.sidebarActive
      }
    },

    created() {

    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
