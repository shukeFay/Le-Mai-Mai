import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

//引入全局样式
import style from './assets/statics/site/css/style.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
