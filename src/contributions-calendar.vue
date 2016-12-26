<template>
   <svg width="600" height="100">
      <rect
        v-for="(day, index) in days"
        :x="day.weekIndex + (day.weekIndex * 10)"
        :y="(index % 7) + (index % 7) * 10"
        :fill="calculateValue(day.date)"
        width="7"
        height="7">
      </rect>
    </svg>
</template>

<script>
  import { daysOfTheYear } from './generate-days';
  export default {
    data() {
      return {
        days: daysOfTheYear(2017),
        history: {
          '31-12-2017': 8
        }

      }
    },
    methods: {
      calculateValue(value) {
        if (this.history[value]) {
          return 'red'
        }
        return 'gray';
      }
    },
    mounted() {
    }
  }
</script>