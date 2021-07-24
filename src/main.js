/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import vSelect from 'vue-select';
import DatePicker from 'vue2-datepicker';

import 'vue2-datepicker/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';

import App from '@/App.vue';
import applyPrototypes from '@/helpers/applyPrototypes.js';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('v-select', vSelect);
// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('date-picker', DatePicker);
applyPrototypes(Vue);


// PouchDB.debug.enable('*');

Vue.config.productionTip = false;
const app = new Vue({
  router,
  store,

  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
