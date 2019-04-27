import Vue from 'vue'
import vueCustomElement from 'vue-custom-element';
import demoApp from '@/components/demoApp.vue';

Vue.use(vueCustomElement);
Vue.customElement('demo-app', demoApp);