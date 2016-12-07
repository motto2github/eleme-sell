// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
});

router.push('/goods');

/* eslint-disable no-new */
new Vue({
  router,
  template: '<v-app></v-app>',
  components: {
    'v-app': App
  }
}).$mount('#mount');
