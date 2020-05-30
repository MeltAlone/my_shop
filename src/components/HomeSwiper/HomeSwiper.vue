<template>
  <nav class="home_nav">
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(types, index) in typeArr" :key="index">
        <a href="javascript:" class="link_to_food" v-for="type in types" :key="type.id">
          <div class="food_container">
            <img :src="baseImgUrl+type.image_url">
          </div>
          <span>{{ type.title }}</span>
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  </nav>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      baseImgUrl: 'https://fuss10.elemecdn.com'
    }
  },
  created () {
    // 获取食物类型
    this.getFoodTypes();
  },
  mounted () {

  },
  watch: {
    types(value){
      this.$nextTick(() => {
        // 创建Swiper实例
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  computed: {
    ...mapState(['types']),

    // 食物类型数组分为二维数组，一项8个值
    typeArr () {
      const { types } = this;
      let resultArr = [];
      let tempArr = [];
      types.forEach(i => {
        tempArr.push(i)
        // 8个存一次
        if(tempArr.length === 8){
          resultArr.push(tempArr)
          tempArr = []
        }
      })
      // 剩余存入
      if(tempArr.length !== 0){
        resultArr.push(tempArr)
      }
      return resultArr;
    }
  },
  methods: {
    ...mapActions(['getFoodTypes'])
  },
  name: 'HomeSwiper'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
