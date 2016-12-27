<template>
  <div>
     <ContributionsCalendar :history="{
          '1-12-2016': 8,
          '5-5-2016': 12,
          '6-6-2016': 5,
          '7-7-2016': 2
        }" :year="2016" />
  </div>
</template>

<script>
  import ContributionsCalendar from './contributions-calendar';

  export default {
    components: {
      ContributionsCalendar
    },
    mounted() {
      console.log(this.history);
    }
  }
</script>