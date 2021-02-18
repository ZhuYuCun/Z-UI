import Vue from 'vue'
import Router from 'vue-router';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
      {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    }
  ]
})
