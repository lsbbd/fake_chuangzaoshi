<template lang="html">
  <header>
    <div class="button" :class="{active: sidebarActive}" @click="toggleSidebar()">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="logo">
      <img src="/static/images/logo_mobile.svg" alt="">
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      // 侧边栏可见性
      sidebarActive: false
    }
  },

  methods: {
    toggleSidebar () {
      this.sidebarActive = !this.sidebarActive
      this.$parent.sidebarActive = !this.$parent.sidebarActive
    }
  }

}
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
