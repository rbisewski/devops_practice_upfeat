import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Notifications from 'vue-notification'

const isProduction = false;
Vue.hostname = 'localhost:3000';
Vue.protocol = 'http://';

// the below line gets replaced during the docker build process
if (isProduction === true) {
    Vue.hostname = "upfeat-backend.ibiscybernetics.com"
    Vue.protocol = 'https://';
}

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
