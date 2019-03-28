import Vue from "vue";
import App from "./App.vue";

//引入全局样式
import "./assets/statics/site/css/style.css";

//导入饿了么ui模块
import ElementUI from "element-ui";
//导入样式
import 'element-ui/lib/theme-chalk/index.css';
// vue插件
Vue.use(ElementUI);


//统一设置axios
import axios from "axios";
Vue.prototype.$axios = axios;

//统一设置基地址
axios.defaults.baseURL = "http://111.230.232.110:8899";

//统一设置过滤器
import moment from "moment";
Vue.filter('globalFormatTime',function(value,fmtTemplate){
  if (fmtTemplate) {
    return moment(value).format(fmtTemplate);
  } else {
    return moment(value).format('YYYY-MM-DD');
  }
})



// 路由相关
import VueRouter from "vue-router";
// use
Vue.use(VueRouter);

// 导入 组件
import index from "./components/index.vue";
import cart from "./components/cart.vue";
import detail from "./components/detail.vue";

//路由规则
let routes = [
  {
    path: "/",
    component: index
  },
  {
    path: "/index",
    component: index
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/detail/:id",
    component: detail
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
