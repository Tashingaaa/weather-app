// feauture 1

let now = new Date();

let dateTime = document.querySelector("#date-time");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

dateTime.innerHTML = `${day}, ${hours}:${minutes}`;

// feauture 2

function searchCity(city) {
  let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  console.log(response.data);

  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
  document.querySelector(
    "#humid"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#winds").innerHTML = `${Math.round(
    response.data.wind.speed
  )}km/h`;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

function handleSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#city-name-input").value;
  searchCity(city);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", handleSubmit);

searchCity("Johannesburg");
