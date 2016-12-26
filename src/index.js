import Vue from 'vue';
import ContributionCalendar from './contributions-calendar';
import styles from './styles/index.css';

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
};

new Vue({
    ...ContributionCalendar
}).$mount('#app');
