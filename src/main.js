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
  if (
    limit.find((kind) => {
      return params.kind == kind;
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
              nth: 0
            }).then(() => {
              return store.dispatch(`get-${params.kind}-widget-infos`, {
                nth: 1
              });
            }).then(() => {
              return store.dispatch(`get-${params.kind}-widget-infos`, {
                nth: 2
              });
            }).then(() => {
              next();
            });
          else
            store.dispatch(`get-${params.kind}-widget-infos`, {
              nth: parseInt(params.nth)
            }).then(() => {
              return store.dispatch(`get-${params.kind}-widget-infos`, {
                nth: parseInt(params.nth) - 1
              });
            }).then(() => {
              if (parseInt(params.nth) + 1 < store.getters[`${params.kind}WidgetsLength`])
                return store.dispatch(`get-${params.kind}-widget-infos`, {
                  nth: parseInt(params.nth) + 1
                });
              else return;
            }).then(() => {
              if (parseInt(params.nth) + 2 < store.getters[`${params.kind}WidgetsLength`])
                return store.dispatch(`get-${params.kind}-widget-infos`, {
                  nth: parseInt(params.nth) + 2
                });
              else return;
            }).then(() => {
              next();
            });
        } else {
          if ((parseInt(params.nth) + 2 < store.getters[`${params.kind}WidgetsLength`] && typeof store.state[params.kind].subjects[parseInt(params.nth) + 2] == 'undefined') ||
            (parseInt(params.nth) - 1 >= 0 && typeof store.state[params.kind].subjects[parseInt(params.nth) - 1] == 'undefined')) {
            if (parseInt(params.nth) - parseInt(from.params.nth) > 0) {
              store.dispatch(`get-${params.kind}-widget-infos`, {
                nth: parseInt(params.nth) + 2
              }).then(() => {
                next();
              });
            } else {
              store.dispatch(`get-${params.kind}-widget-infos`, {
                nth: parseInt(params.nth) - 1
              }).then(() => {
                next();
              });
            }
          } else next();
        }
      }
      if (!store.getters[`${params.kind}WidgetsLength`]) {
        store.dispatch(`get-${params.kind}-annual-2016`).then(() => {
          fn();
        });
      } else {
        fn();
      }
    }
  } else {
    store.commit('error', {
      status: true
    });
    next();
  }
  return true;
});

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
