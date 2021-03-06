import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import 'firebaseui/dist/firebaseui.css'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps';
import { TRAIL_KEY } from './secrets.js';
import { MAP_KEY } from './secrets';
import vueSmoothScroll from 'vue-smooth-scroll';

Vue.use(VueGoogleMaps, {
    load: {
        key: MAP_KEY,
    }
})
Vue.use(VueFire)
Vue.use(vueSmoothScroll)
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
