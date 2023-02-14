// Slide to the Destination
let mainItem = document.querySelector(".container");
function slider(id) {
  mainItem.style.transform = `translateX(-${id})`;
}

// Analog Clock
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;
  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  min.style.transform = `rotate(${mm}deg)`;
  sec.style.transform = `rotate(${ss}deg)`;
});

// Digital Clock
let hours = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

// convert 24 hr to 12hr clock
let am = h >= 12 ? "PM" : "AM";
if (h > 12) {
  h = h - 12;
}
// add zero before single digits

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;

// Stop Watch

let stopWatchsec = 00;
let tens = 00;
let stopWatchmin = 00;
let stopWatchhr = 00;

let getTens = document.querySelector(".stop-watch-wrapper .time .tens");
let getSeconds = document.querySelector(".stop-watch-wrapper .time .seconds");
let getMinute = document.querySelector(".stop-watch-wrapper .time .minute");
let getHour = document.querySelector(".stop-watch-wrapper .time .hour");

let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;
function stopWatch(btn) {
  if (btn === "btn-start") {
    startTimer();
  } else if (btn === "btn-stop") {
    stopTimer();
  } else if (btn === "btn-reset") {
    resetTimer();
  }
}

function startTimer() {
  interval = setInterval(() => {
    tens++;
    tens = tens < 10 ? "0" + tens : tens;
    getTens.innerHTML = tens;
    if (tens > 99) {
      stopWatchsec++;
      stopWatchsec = stopWatchsec < 10 ? "0" + stopWatchsec : stopWatchsec;
      tens = "00";
      getTens.innerHTML = tens;
      getSeconds.innerHTML = stopWatchsec;
    }
    if (stopWatchsec >= 60) {
      stopWatchsec = "00";
      stopWatchsec = stopWatchsec < 10 ? "0" + stopWatchsec : stopWatchsec;
      getSeconds.innerHTML = stopWatchsec;
      stopWatchmin++;
      stopWatchmin = stopWatchmin < 10 ? "0" + stopWatchmin : stopWatchmin;
      getMinute.innerHTML = stopWatchmin;
    }
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  tens = "00";
  getTens.innerHTML = tens;
  stopWatchsec = "00";
  getSeconds.innerHTML = stopWatchsec;
  stopWatchmin = "00";
  getMinute.innerHTML = stopWatchmin;
}

// JOke Generator

const apiKey = "iJkXXdzbd1VVLt6bTjgZPg==J6iRlZAIYW6eDM9r";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function jokeGenerator() {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  document.querySelector(".joke").innerHTML = data[0].joke;
}

// Loan Calculator

function calculateLoan() {
  loanAmount = document.querySelector("#loan-amount").value;
  interestRate = document.querySelector("#interest-rate").value;
  monthsToPay = document.querySelector("#time-pay").value;

  interest = (loanAmount * (interestRate / 100)) / monthsToPay;
  monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

  document.querySelector(
    ".payment"
  ).innerHTML = `Monthly Payment : ${monthlyPayment}`;
}
