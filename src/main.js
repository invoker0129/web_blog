/*
 * @Author: Meng Jiawei
 * @Date: 2020-05-02 18:40:17
 * @LastEditTime: 2020-05-25 15:36:00
 * @FilePath: \blog\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Input,Button, Tag, Icon, Drawer, Avatar, Checkbox, CheckboxGroup, Pagination, Select, Option, DatePicker} from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import toastRegistry from './Toast/index'
Vue.use(toastRegistry).use(Input)

Vue.config.productionTip = false
Vue.use(Pagination).use(Select).use(Option).use(DatePicker)
Vue.use(Button).use(mavonEditor).use(Icon).use(Tag).use(Drawer).use(Avatar).use(Checkbox).use(CheckboxGroup)
Vue.use(require('moment'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
