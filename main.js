const labelCurrentDay = document.getElementById("current-day");

const labelUTCTime = document.getElementById("current-time");

const currentDate = new Date();
const daysOfTheWeek = [
  `Sunday`,
  "Monday",
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
const currentTime = currentDate.toISOString().slice(11, 19);

const currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];

console.log(currentDayOfTheWeek);
console.log(labelUTCTime);
console.log(currentDate);
console.log(currentTime);

labelCurrentDay.textContent = currentDayOfTheWeek;
labelUTCTime.textContent = currentTime;
