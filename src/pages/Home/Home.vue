<template>
  <section class="home">
    <!--首页头部-->
    <HomeHeader :title="address.name">
      <span class="header_search" slot="header_search">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HomeHeader>
    <!--首页导航-->
    <HomeSwiper v-if="types.length" />
    <img src="./images/home_back.svg" alt="back" v-else>
    <!--首页附近商家-->
    <ShopList></ShopList>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import HomeSwiper from '../../components/HomeSwiper/HomeSwiper'
import ShopList from '../../components/ShopList/ShopList'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    ShopList
  },
  methods: {
    ...mapActions(['getFoodTypes'])
  },
  computed: {
    ...mapState(['address', 'types', 'shops'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home  //首页
    width 100%
</style>
