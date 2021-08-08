const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY = "cdf782600f90c71cba29ee1644eec9c5";

function homeOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}
function homeError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(homeOk, homeError);
