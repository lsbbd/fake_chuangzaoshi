<template lang="html">
  <div class="link-card">
    <a :href="url">
      <figure
        @mousemove="handleMousemove($event)"
        @mouseenter="showToolTip()"
        @mouseleave="hideToolTip()"
        >
        <img class="logo" :src="logo" :alt="name">
        <figcaption>{{ name }}</figcaption>
      </figure>
    </a>
    <div class="tooltip-url" v-show="tooltipVisible" :style="tootipPos">
      <span>{{ url }}</span>
    </div>
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
        // 工具提示可见性
        tooltipVisible: false,
        // 工具提示位置
        tootipPos: {
          left: '0',
          top: '0'
        }
      }
    },

    methods: {
      // 显示工具提示
      showToolTip() {
        this.tooltipVisible = true
      },

      // 隐藏工具提示
      hideToolTip() {
        this.tooltipVisible = false
      },

      // 跟踪鼠标移动
      handleMousemove(e) {
        this.tootipPos.left = e.clientX + 15 + 'px'
        this.tootipPos.top = e.clientY + 15 + 'px'
      }
    },

    created() {
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
