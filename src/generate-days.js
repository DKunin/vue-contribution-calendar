'use strict';

const daysInMonthFromDate = function(date) {
  return 32 - new Date(date).getDate();
};

const daysInMonth = function(month, year) {
  return daysInMonthFromDate(new Date(year, month, 32));
};

const generateDays = function(month, year, original = false) {
  let daysOfCurMonth = daysInMonth(month, year);
  let daysArray      = [];
  let index          = 0;

  while(index < daysOfCurMonth) {
    daysArray.push(index);
    index = index += 1;
  }

  return daysArray.map(function(day, i) {
    return {
      weekIndex: getWeek(new Date(year, month, i + 1)),
      currentMonth: original,
      date: `${day + 1}-${month + 1}-${year}`
    };
  });
};

const daysOfTheYear = (year) => {
  return Array(12).fill(0).reduce((newArray, zero, index) => {
    return newArray.concat(generateDays(index, year));
  }, []);
}

const getWeek = date => {
    var firstJanuary = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((((date - firstJanuary) / 86400000) + firstJanuary.getDay() + 1) / 7) - 1;
}

module.exports = { generateDays, daysOfTheYear, getWeek };