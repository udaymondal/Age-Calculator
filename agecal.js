var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();
// console.log(currentMonth);

document.getElementById("dateToday").innerText =
  currentDay + " " + currentMonth + " " + currentYear;
