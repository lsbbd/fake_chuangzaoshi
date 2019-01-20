<template lang="html">
  <div class="app-card">
    <a :href="url">
      <div class="logo-wrapper" :style="{backgroundColor: backgroundColor}">
        <img :src="logo" :alt="name">
        <div class="platform-mask">
          <span
            v-for="(icon, index) in platformsIcon"
            class="czs"
            :class="{[icon]: true}"
          >
          </span>
        </div>
      </div>
    </a>

    <div class="info">
      <h3 class="name">{{ name }}</h3>
      <p class="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 应用名
    name: { type: String },
    platforms: { type: Array },
    logo: { type: String },
    desc: { type: String },
    url: { type: String },
    backgroundColor: { type: String }
  },

  data () {
    return {
      platformsIcon: []
    }
  },

  methods: {

  },

  created () {
    if (this.platforms) {
      if (this.platforms.indexOf('linux') !== -1) {
        this.platformsIcon.push('czs-linux')
      }

      if (this.platforms.indexOf('macos') !== -1) {
        this.platformsIcon.push('czs-apple')
      }

      if (this.platforms.indexOf('windows') !== -1) {
        this.platformsIcon.push('czs-microsoft')
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
