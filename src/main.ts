import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Category from './model/CateEnum'
import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// let item = new ItemData(Category['工作'],'我是标题','我是内容')
// let ac = new ActionHelper()
// ac.add(item)

// console.log(ac.memoList)