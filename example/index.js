import Vue from 'vue';
import Holder from './holder';

// import ContributionsCalendar from '../src/';
var ContributionsCalendar = require('../src');

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
};

new Vue({
    ...Holder,
    ...{
        components: ContributionsCalendar
    }
}).$mount('#app');
