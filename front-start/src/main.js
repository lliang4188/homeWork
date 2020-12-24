import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// method1 to zh-cn
// import zh from 'vee-validate/dist/locale/zh_CN'

// method2 to zh-cn

import '@/utils/veevalidate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
