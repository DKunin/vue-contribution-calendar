import Vue from 'vue';
import Holder from './holder';

var contributionsCalendar = require('../dist');

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
}

new Vue({
    ...Holder,
    ...{
        components: { contributionsCalendar }
    }
}).$mount('#app');
