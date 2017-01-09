import Vue from 'vue';
import Holder from './holder';

var contributionCalendar = require('../src');

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
}

new Vue({
    ...Holder,
    ...{
        components: { contributionCalendar }
    }
}).$mount('#app');
