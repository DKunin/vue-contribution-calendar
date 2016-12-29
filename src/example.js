import Vue from 'vue';
import Holder from './holder';

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
};

// import ContributionsCalendar from '../src/contributions-calendar';

// Vue.component('contributions-calendar', ContributionsCalendar)

new Vue({
    ...Holder
}).$mount('#app');
