import Vue from 'vue'
// import App from './App.vue'
import AppUser from './AppUser'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppUser),
}).$mount('#app')
