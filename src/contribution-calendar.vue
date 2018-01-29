<template>
  <div> 
     <svg width="100vw" height="13vw">
        <g v-for="(day, index) in days" v-bind:key="index"> 
          <rect
            :x="day.weekIndex * screenWidth"
            :y="day.dayIndex  * screenWidth"
            :fill="calculateValue(day.date)"
            width="1.5vw"
            height="1.5vw"
            v-on:click="cellClick(day.date, history[day.date])"
          >
            <title>{{day.date}}:{{history[day.date]||0}}</title>
          </rect>
        </g>
      </svg>
  </div>
</template>

<script>
  import { daysOfTheYear } from './generate-days';

  module.exports = {
    props: {
      year: {
        type: Number,
        default: new Date().getFullYear()
      },
      history: {
        type: Object,
        default: () => ({})
      },
      cellClick: {
        type: Function,
        default: () => ({})
      }
    },
    data() {
      return {
        days: []
      }
    },
    computed: {
      screenWidth () {
        return screen.width / 54;
      }
    },    
    methods: {
      calculateValue(value) {
        const valueExists = this.history[value];
        if (valueExists) {
          if (valueExists >= 8) {
            return '#000'
          }
          if (valueExists == 7) {
            return '#005824'
          }
          if (valueExists == 6) {
            return '#238b45'
          }
          if (valueExists == 5) {
            return '#41ae76'
          }
          if (valueExists == 4) {
            return '#66c2a4'
          }
          if (valueExists == 3) {
            return '#99d8c9'
          }
          if (valueExists == 2) {
            return '#ccece6'
          }
          if (valueExists == 1) {
            return '#edf8fb'
          }

        }
        return '#eeeeee';
      }
    },
    mounted() {
      this.days = daysOfTheYear(this.year);
    }
  }
</script>
