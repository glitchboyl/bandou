import Vue from "vue";
import Router from "vue-router";
import mainContainer from '@/components/main';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/movie/annual2016/0"
    },
    {
      path: "/:kind",
      component: mainContainer,
      children: [{
        path: "annual2016/:nth"
      }],
      
    }
  ]
});
