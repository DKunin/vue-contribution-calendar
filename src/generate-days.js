/* eslint-disable */
'use strict';

const daysInMonthFromDate = function (date) {
  return 32 - new Date(date).getDate();
};

const daysInMonth = function (month, year) {
  return daysInMonthFromDate(new Date(year, month, 32));
};

const getDayIndex = function (month, year, index) {
  return (new Date(year, month, index)).getDay();
};

const generateDays = function (month, year, original = false) {
  let daysOfCurMonth = daysInMonth(month, year);
  let daysArray = [];
  let index = 0;

  while (index < daysOfCurMonth) {
    daysArray.push(index);
    index = index += 1;
  }

  return daysArray.map(function (day, i) {
    const w = getWeek(year, month, day + 1);
    return {
      dayIndex: getDayIndex(month, year, i),
      weekIndex: w >= 53 ? 0 : w,
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

function getWeek(year, month, day) {
  month += 1;
  var a = Math.floor((14 - (month)) / 12);
  var y = year + 4800 - a;
  var m = (month) + (12 * a) - 3;
  var jd = day + Math.floor(((153 * m) + 2) / 5) + (365 * y) + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  var d4 = (jd + 31741 - (jd % 7)) % 146097 % 36524 % 1461;
  var L = Math.floor(d4 / 1460);
  var d1 = ((d4 - L) % 365) + L;
  return Math.floor(d1 / 7) + 1;
}

module.exports = { generateDays, daysOfTheYear, getWeek };