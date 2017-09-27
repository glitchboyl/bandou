import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import vClickOutside from 'v-click-outside';

Vue.use(vClickOutside);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const {
    params
  } = to;
  const limit = ['movie', 'game', 'drama', 'music', 'book'];
  if (params.kind == 'error') {
    next();
    return;
  }
  if (
    limit.find(function (kind) {
      return kind == params.kind;
    })
  ) {
    if (!params.nth && params.nth !== 0)
      next({
        path: `/${params.kind}/annual2016/0`,
        query: null
      });
    else {
      if (!store.getters[`${params.kind}WidgetsLength`]) {
        store.dispatch(`get-${params.kind}-annual-2016`);
      }
      store.dispatch(`get-${params.kind}-widget-infos`, params.nth);
      next();
    }
  } else
    next({
      path: `/error`,
      query: null
    });
});

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
