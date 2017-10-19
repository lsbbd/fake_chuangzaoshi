<template lang="html">
  <div class="link-card">
    <figure>
      <img class="logo" :src="logo" :alt="name">
      <figcaption>{{ name }}</figcaption>
    </figure>
    <h4 class="desc">{{ desc }}</h4>
    <p class="count">
      <span class="watch czs czs-eye-l">{{ watch }}</span>
      <span class="good czs czs-thumbs-up-l">{{ good }}</span>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      // 网站名
      name: { type: String },
      // 链接
      url: { type: String },
      // 简介
      desc: { type: String },
      // logo
      logo: { type: String },
      // 浏览量
      watch: { type: Number },
      // 得赞数
      good: { type: Number }
    },

    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
