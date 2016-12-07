<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';
  
  export default {
    components: {
      'v-header': header
    }
  };

</script>

<style>
  #app>div.tab {display: flex; width: 100%; height: 40px; line-height: 40px;}
  #app>div.tab>div.tab-item {flex: 1; text-align: center;}
  #app>div.tab>div.tab-item>a {display: block; font-size: 14px; color: rgb(77, 85, 93);}
  #app>div.tab>div.tab-item>a.router-link-active {color: rgb(240, 20, 20);}
</style>
