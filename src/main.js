import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'

Vue.config.productionTip = false;

var vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

vue.use(VueSession)