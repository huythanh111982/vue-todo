import Vue from 'vue'
import VeeValidate from "vee-validate";

import App from './App.vue'
// Import font
import '@mdi/font/css/materialdesignicons.css' 
// Import bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// Import template
import './assets/css/template.css';

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
