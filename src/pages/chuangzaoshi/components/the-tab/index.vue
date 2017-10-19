<template lang="html">
  <div class="tab">
    <div class="buttons">
      <span
        class="czs"
        :class="{active: index === currentTab, [tab.iconName]: true}"
        v-for="(tab, index) in tabs"
        @click="currentTab = index"
      >
        {{ tab.name }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { name: '书签', iconName: 'czs-bookmark-l'},
          { name: '利器', iconName: 'czs-wrench-l'}
        ],

        currentTab: 0
      }
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
