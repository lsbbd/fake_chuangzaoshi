<template lang="html">
  <div class="card-group">
    <div class="catalog">
      <div class="wrapper">
        <span class="czs czs-fire-l">{{ data.catalog }}</span>
      </div>
    </div>
    <div class="col-wrapper">
      <div class="col" v-for="(link, index) in data.list">
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
    </div>
  </div>
</template>

<script>
  import linkCard from '../link-card/index.vue'
  import data from './data.js'

  export default {
    components: {
      linkCard
    },

    data() {
      return {
        data: data
      }
    },

    created() {
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
