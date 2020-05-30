<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.getAddress()
    this.getFoodTypes()
    this.getShops()
  },
  methods: {
    ...mapActions(['getAddress', 'getFoodTypes', 'getShops'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
