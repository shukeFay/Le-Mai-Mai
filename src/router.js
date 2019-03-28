//引入Vue
import Vue from "vue";
// 路由相关
import VueRouter from "vue-router";
// use
Vue.use(VueRouter);

// 导入 组件
import index from "./components/index.vue";
import cart from "./components/cart.vue";
import detail from "./components/detail.vue";
import userContainer from "./components/userContainer.vue";
import userIndex from "./components/userIndex.vue";
import userOrder from "./components/userOrder.vue";
import userDetail from "./components/userDetail.vue";

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
  },

  //用户会员中心
  {
    path: "/user",
    component: userContainer,
    children:[
      {
        path: "Index",
        component: userIndex
      },
      {
        path: "Order",
        component: userOrder
      },
      {
        path: "Detail",
        component: userDetail
      },
    ]
  }
];

let router = new VueRouter({
  routes
});

export default router;
