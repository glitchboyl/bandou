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
    if (!parseInt(params.nth) && parseInt(params.nth) !== 0)
      next({
        path: `/${params.kind}/annual2016/0`,
        query: null
      });
    else {
      store.commit('set-y', {
        y: -100 * parseInt(params.nth)
      });

      function fn() {
        if (typeof store.state[params.kind].subjects[parseInt(params.nth)] == 'undefined') {
          if (parseInt(params.nth) == 0)
            store.dispatch(`get-${params.kind}-widget-infos`, {
              nth: 0,
              fn() {
                store.dispatch(`get-${params.kind}-widget-infos`, {
                  nth: 1,
                  fn() {
                    store.dispatch(`get-${params.kind}-widget-infos`, {
                      nth: 2,
                      fn: next
                    });
                  }
                });
              }
            });
          else
            store.dispatch(`get-${params.kind}-widget-infos`, {
              nth: parseInt(params.nth),
              fn() {
                store.dispatch(`get-${params.kind}-widget-infos`, {
                  nth: parseInt(params.nth) - 1,
                  fn() {
                    if (parseInt(params.nth) + 1 != store.getters[`${params.kind}WidgetsLength`])
                      store.dispatch(`get-${params.kind}-widget-infos`, {
                        nth: parseInt(params.nth) + 1,
                        fn: next
                      });
                    else next();
                  }
                });
              }
            });
        } else {
          if (parseInt(params.nth) + 2 < store.getters[`${params.kind}WidgetsLength`] && typeof store.state[params.kind].subjects[parseInt(params.nth) + 2] == 'undefined')
            store.dispatch(`get-${params.kind}-widget-infos`, {
              nth: parseInt(params.nth) + 2,
              fn: next
            });
          else next();
        }
      }
      if (!store.getters[`${params.kind}WidgetsLength`]) {
        store.dispatch(`get-${params.kind}-annual-2016`, {
          fn
        });
      } else {
        fn();
      }
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
