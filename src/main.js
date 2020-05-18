import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Tag,Icon,Drawer,Avatar,Checkbox,CheckboxGroup,Pagination,Select,Option,DatePicker} from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import toastRegistry from './Toast/index'
Vue.use(toastRegistry)

Vue.config.productionTip = false
Vue.use(Pagination).use(Select).use(Option).use(DatePicker)
Vue.use(Button).use(mavonEditor).use(Icon).use(Tag).use(Drawer).use(Avatar).use(Checkbox).use(CheckboxGroup)
Vue.use(require('moment'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
