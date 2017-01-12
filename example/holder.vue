<template>
      <contributionCalendar
        :history="history"
        :year="2016"
        :cellClick="someMethod" />
</template>

<style>
  rect {
    cursor: pointer;
  }
</style>

<script>
  var historyObject = {
    '23-12-2016': 14,
    '9-12-2016': 6,
    '23-11-2016': 3,
    '5-10-2016': 20,
    '16-9-2016': 6,
    '31-8-2016': 9,
    '24-8-2016': 6,
    '26-7-2016': 10,
    '12-7-2016': 11,
    '8-7-2016': 7,
    '30-6-2016': 5,
    '6-6-2016': 9,
    '3-6-2016': 8,
    '31-5-2016': 7,
    '5-4-2016': 7,
    '4-4-2016': 6,
    '1-4-2016': 4,
    '31-3-2016': 5,
    '15-3-2016': 4,
    '10-3-2016': 9,
    '2-3-2016': 6,
    '1-3-2016': 9,
    '11-1-2016': 1 
  };

  export default {
    methods: {
      someMethod(date, value) {
        this.$set(this.history, date, value ? ++value : 1);
      }
    },
    data() {
      return {
        history: historyObject
      }
    }
  }
</script>