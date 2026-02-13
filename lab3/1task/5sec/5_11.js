// Task 1
let d2 = new Date("2012-02-20T03:12");
alert( d2 );

// Task 2
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

// Task 3
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) );
alert( getLastDayOfMonth(2012, 1) );
alert( getLastDayOfMonth(2013, 1) );