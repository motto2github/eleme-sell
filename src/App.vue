<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';

  const RES_CODE_SUCC = 0;

  export default {
    data () {
      return {
        seller: {}
      };
    },
    created () {
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if (res.code === RES_CODE_SUCC) {
          this.seller = res.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };

</script>

<style type="text/stylus" lang="stylus">
  @import "./common/stylus/mixin.styl"
  #app
    &>div.tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, .1))
      &>div.tab-item
        flex: 1
        text-align: center
        &>a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.router-link-active
            color: rgb(240, 20, 20)
</style>
