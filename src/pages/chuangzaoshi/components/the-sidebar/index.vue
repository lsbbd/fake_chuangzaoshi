<template lang="html">
  <aside>
    <figure class="logo">
      <div class="image-wrapper">
        <img src="http://chuangzaoshi.com/assets/images/logo.svg" alt="创造狮导航">
      </div>
      <figcaption>为创意工作者而设计</figcaption>
    </figure>

    <nav class="tabs">
      <ul>
        <li
          class="tab"
          v-for="(tab, ti) in data"
          :class="{ active: currentTab === ti }" @click="toggleTab(ti)"
        >
          <div class="tab-name">
            <span
             class="icon czs"
             :class="tab.iconName">
           </span>
            <h3>{{ tab.name }}</h3>
          </div>
          <ul class="content" v-if="currentTab === ti">
            <li v-for="(item, ii) in tab.list">
              <a class="czs" :class="item.iconName">{{ item.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="footer">
      <p>工作与兼职平台</p>
      <p>@ 创造狮</p>
    </div>
  </aside>
</template>

<script>
  import data from './data'

  export default {
    data() {
      return {
        data: data,
        // 当前激活 tab
        currentTab: 0
      }
    },

    methods: {
      toggleTab(index) {
        this.currentTab = index
      }
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
