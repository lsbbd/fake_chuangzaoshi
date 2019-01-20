<template lang="html">
  <div class="card-group">
    <div class="catalog">
      <div class="wrapper">
        <span class="czs czs-fire-l">{{ linkList.catalog }}</span>
      </div>
    </div>
    <div class="col-wrapper">
      <div class="col" v-for="(link, index) in linkList.list">
        <link-card
          :key="index"
          :name="link.name"
          :url="link.url"
          :desc="link.desc"
          :logo="link.logo"
          :watch="link.watch"
          :good="link.good"
        >
        </link-card>
      </div>
      <!-- <div class="col" v-for="(app, index) in appList.list">
        <app-card
          :key="index"
          :name="app.name"
          :url="app.url"
          :desc="app.desc"
          :logo="app.logo"
          :platforms="app.platforms"
          :backgroundColor="app.backgroundColor"
        >
      </app-card> -->
      </div>
    </div>
  </div>
</template>

<script>
import linkCard from '../link-card'
import appCard from '../app-card/'

import { linkList, appList } from './data.js'

export default {
  components: {
    linkCard,
    appCard
  },

  data () {
    return {
      linkList: linkList,
      appList: appList
    }
  },

  created () {
  }
}
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
