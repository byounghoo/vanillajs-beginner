const date = document.querySelector(".date");
const day = document.querySelector(".day");
const clock = document.querySelector(".clock");

function getTime() {
  const time = new Date();
  day.innerText = `${time.toDateString()}`;
  clock.innerText = `${time.toLocaleTimeString("it-IT")}`;
}

getTime();
setInterval(getTime, 1000);
