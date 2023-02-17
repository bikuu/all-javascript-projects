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

// Currency Convertor

const getFirstCurrEL = document.querySelector("#currency-first");
const getCurrValue = document.querySelector("#curr-amt");
const getSecCurrEL = document.querySelector("#currency-second");
const getConvertedValue = document.querySelector("#converted-value");

const exchangeRate = document.querySelector(".exchange-rate");

const apiCurrUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=";
const currOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
upadteRate();
async function upadteRate() {
  const response = await fetch(
    `${apiCurrUrl}${getFirstCurrEL.value}_${getSecCurrEL.value}`,
    currOptions
  );
  const data = await response.json();
  exchangeRate.innerHTML = `1 ${
    getFirstCurrEL.value
  } = ${data.exchange_rate.toFixed(3)} ${getSecCurrEL.value}`;
  getConvertedValue.value = (getCurrValue.value * data.exchange_rate).toFixed(
    3
  );
}

getFirstCurrEL.addEventListener("change", upadteRate);
getSecCurrEL.addEventListener("change", upadteRate);
getCurrValue.addEventListener("change", upadteRate);

// BMI Calculator

const btn = document.querySelector("#btn");

function calculateBMI() {
  const heightValue = document.querySelector("#height").value / 100;
  const weightValue = document.querySelector("#weight").value;
  const bmiValue = (weightValue / heightValue ** 2).toFixed(2);
  document.querySelector("#bmi-result").value = bmiValue;
  if (bmiValue < 18.5) {
    document.querySelector("#weight-condition").innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    document.querySelector("#weight-condition").innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    document.querySelector("#weight-condition").innerText = "Over Weight";
  } else if (bmiValue > 30) {
    document.querySelector("#weight-condition").innerText = "Obesity";
  }
}
btn.addEventListener("click", calculateBMI);

// Tempature Convertor

const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

function convertTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      kelvin.value = (currentValue + 273.15).toFixed(2);
      break;

    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (currentValue - 273.15).toFixed(2);
      fahrenheit.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}

// Quote Generator

const btnQuote = document.querySelector(".quote-container button");
const apiQuote = "https://api.quotable.io/random";

async function generateQuote() {
  try {
    btnQuote.innerText = "Loading...";
    btnQuote.disabled = true;
    document.querySelector("#quote").innerText = "Quote Generating...";
    document.querySelector(".author").innerText = "";

    const response = await fetch(apiQuote);
    const data = await response.json();
    document.querySelector("#quote").innerText = data.content;
    document.querySelector(".author").innerText = `~ ${data.author}`;
    btnQuote.innerText = "Generate New Quote";
    btnQuote.disabled = false;
  } catch (error) {
    document.querySelector("#quote").innerText =
      "An error happened, Please try again...";
    document.querySelector(".author").innerText = "";
    btnQuote.innerText = "Get a quote";
    btnQuote.disabled = false;
  }
}
