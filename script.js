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
