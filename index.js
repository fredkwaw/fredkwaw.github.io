const daysEl = document.querySelector(".day");
const hoursEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".second");

let newYears = "1 jan 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);

  const hours = Math.floor(totalseconds / 3600) % 24;

  const mins = Math.floor(totalseconds / 60) % 60;

  const seconds = Math.floor(totalseconds) % 60;

  console.log(days, hours, mins, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

countdown();

setInterval(countdown, 1000);


const title = document.getElementById("title");

document.getElementById("btnOccasion").addEventListener("click", function () {
  const value = document.getElementById("occasion").value;

  title.innerHTML = value;
});


const monthEle = document.getElementById("month");
const dayEle = document.getElementById('days');
const yearEle = document.getElementById('year');


document.getElementById("btnDate").addEventListener("click", function () {

  newYears = `${dayEle.value} ${monthEle.value} ${yearEle.value}`
  countdown();




});