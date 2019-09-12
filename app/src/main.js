import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
