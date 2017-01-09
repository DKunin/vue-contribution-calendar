# Vue Contribution Calendar

> Vue component to reproduce github contribution calendar with zero dependecies.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
    npm install vue-contribution-calendar
```

## Usage

In any your vue file:

```
    <template>
        <contributionCalendar :history="history" :year="2016" />
    </template>

    <script>
      import contributionCalendar from 'vue-contribution-calenadar';

      export default {
        components: {
          contributionCalendar
        },
        data() {
          return {
            history: {
              '20-12-2016': 7,
               ...
              '11-1-2016': 1 
            }
          }
        },
      }
    </script>
```

## Contribute

Fork, run:

```
    npm run watch
```
and patch away.

## License

MIT © Dmitri Kunin
