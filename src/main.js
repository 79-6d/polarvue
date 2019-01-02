import 'bootstrap'
import Vue from 'vue'
import App from './App.vue'
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/ol/ol.css');
require('../src/assets/styles/main.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
