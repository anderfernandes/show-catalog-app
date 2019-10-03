import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'

Vue.use(SuiVue)

Vue.config.productionTip = false

if (document.querySelector('#show-catalog'))
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#show-catalog')

