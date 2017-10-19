<template lang="html">
  <div class="toolbar">
    <div class="title">
      <h3>
       <span class="scz czs-square"></span>
       前端 <small>Develop</small>
      </h3>
    </div>
    <div class="scroll-bar hidden-xs">
      <div class="content" @mouseenter="stop()" @mouseleave="start()">
        <ul :style="style">
          <li v-for="(ad, index) in adList">
            <span class="desc">{{ ad.desc }}</span>
            <span class="name"><a :href="ad.url">{{ ad.name }}</a></span>
          </li>
        </ul>
      </div>
      <div class="tool-button">
        <span class="pre czs-angle-up-l" @click="preAd()" :class="{disable: isFirstAd()}"></span>
        <span class="next czs-angle-down-l" @click="nextAd()" :class="{disable: isLastAd()}"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import data from './data'

  export default {
    props: {
      // 标题
      title: {
        type: Object
      },
      // 是否自动播放
      autoplay: {
        type: Boolean,
        default: true
      },
      // 播放时间间隔
      interval: {
        type: Number,
        default: 5000
      }
    },

    data() {
      return {
        // 广告列表
        adList: data,

        style: {
          top: '0'
        },

        // 计时器
        timer: 0
      }
    },

    methods: {
      // 是否为最后一条广告
      isLastAd() {
        let temp = parseInt(this.style.top)
        let totalHeight = this.adList.length * 20

        return (temp === -totalHeight + 20) ? true : false
      },

      // 是否为第一条广告
      isFirstAd() {
        let temp = parseInt(this.style.top)

        return (temp === 0) ? true : false
      },

      // 切换到下一条广告
      nextAd() {
        let temp = parseInt(this.style.top)

        if (!this.isLastAd())
          this.style.top = (temp - 20) + 'px'
      },

      // 切换到上一条广告
      preAd() {
        let temp = parseInt(this.style.top)

        if (!this.isFirstAd())
          this.style.top = (temp + 20) + 'px'
      },

      // 回到第一条广告
      backToFirstAd() {
        this.style.top = 0
      },

      // 开始自动滚动
      start() {
        this.timer = setInterval(() => {
          if (this.isLastAd()) {
            this.backToFirstAd()
          } else {
            this.nextAd()
          }
        }, 2000)
      },

      // 停止滚动
      stop() {
        clearInterval(this.timer)
      },
    },

    mounted() {
      if (this.autoplay)
        this.start()
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
