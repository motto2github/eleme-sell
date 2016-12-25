// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

import 'common/stylus/index.styl';

import '../node_modules/animate.css/animate.css';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
});

// router.push('/goods');

/* eslint-disable no-new */
new Vue({
  router,
  template: '<v-app></v-app>',
  components: {
    'v-app': App
  }
}).$mount('#mount');
