import Vue from 'vue';
import Holder from './holder';

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
};

new Vue({
    ...Holder
}).$mount('#app');
