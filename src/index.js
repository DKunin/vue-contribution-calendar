'use strict';

var ContributionsCalendar = require('./contributions-calendar');

module.exports = {
    install (Vue) {
        Vue.component('contributions-calendar', ContributionsCalendar)
    },
    ContributionsCalendar
}

// if (typeof exports == "object") {
//     module.exports = ContributionsCalendar;
// } else if (typeof define == "function" && define.amd) {
//     define([], function(){ return ContributionsCalendar })
// } else if (window.Vue) {
//     Vue.component('contributions-calendar', ContributionsCalendar);
// }