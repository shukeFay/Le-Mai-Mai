import Vue from "vue";
import App from "./App.vue";

//引入全局样式
import "./assets/statics/site/css/style.css";

// 路由相关
import VueRouter from "vue-router";
// use
Vue.use(VueRouter);

// 导入 组件
import index from "./components/index.vue";

//路由规则
let routes = [
  {
    path: "/",
    component: index
  },
  {
    path: "/index",
    component: index
  }
];

let router = new VueRouter({
  routes
});

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
  // 挂载到顶级Vue实例上
  router
}).$mount("#app");
