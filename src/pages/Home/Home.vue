<template>
  <section class="home">
    <!--首页头部-->
    <HomeHeader :title="address.name">
      <router-link tag="span" class="header_search" slot="header_search" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link tag="span" class="header_login" slot="header_login" :to="userInfo._id ? 'userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HomeHeader>
    <!--首页导航-->
    <HomeSwiper v-if="types.length" />
    <img src="./images/home_back.svg" alt="back" v-else>
    <!--首页附近商家-->
      <ShopList />
  </section>
</template>

<script>
import BScroll from 'better-scroll'
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
  mounted () {
    this.$store.dispatch('getShops')
    this.$store.dispatch('getFoodTypes')
    this.$store.dispatch('getShopRatings')
  },
  methods: {
    ...mapActions(['getFoodTypes', 'getShops', 'getShopRatings'])
  },
  computed: {
    ...mapState(['address', 'types', 'shops', 'userInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home  //首页
    width 100%
    .home-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
</style>
