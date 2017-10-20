<template lang="html">
  <div class="body">
    <the-header></the-header>

    <aside class="sidebar" :class="{active: sidebarActive}">
      <the-sidebar></the-sidebar>
    </aside>

    <div class="main">
      <div class="wrapper">
        <toolbar></toolbar>
        <the-tab></the-tab>

        <card-group></card-group>
        <card-group></card-group>
        <card-group></card-group>
        <card-group></card-group>
        <card-group></card-group>
      </div>
    </div>
  </div>
</template>

<script>
  import theSidebar from './components/the-sidebar'
  import toolbar from './components/toolbar'
  import theHeader from './components/the-header'
  import theTab from './components/the-tab'
  import cardGroup from './components/card-group'

  export default {
    components: {
      theSidebar,
      toolbar,
      theHeader,
      theTab,
      cardGroup
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
