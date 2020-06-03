<template>
  <!--首页头部-->
  <header class="home_header">
    <slot name="header_search"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name="header_login"></slot>
  </header>
</template>

<script>
export default {
  name: 'Order',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_header
    background-color #2376b7
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #eef7f2
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #eef7f2
      text-align center
      .header_title_text
        font-size 20px
        color #eef7f2
        display block
    .header_login
      font-size 14px
      color #eef7f2
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #eef7f2
</style>
