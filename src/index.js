function showWeather (response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#weather-icon");
    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class="weather-icon"></img>`;
}
function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
    let day = days[date.getDay()];
    if (hours < 10) {
        hours = `0${hours}`
    };
     if (minutes < 10) {
        minutes = `0${minutes}`
    };
    return `${day} ${hours}:${minutes}`;
}
function searchCity(city) {
    let apiKey = "94dfd32atb684f11d63dcb32odcaff90";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
}
function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    searchCity(searchInput.value);
}
function displayForecast() {
    let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];
    let forecastHtml = "";
    days.forEach(function (day) {
        forecastHtml = forecastHtml + 
        `<div class="column">
            <div class="weather-forecast-day">${day}</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <div class="weather-forecast-temperature-max"><strong>5</strong></div>
              <div class="weather-forecast-temperature-min">2</div>
            </div>
        </div>`;
    })
     let forecastElement = document.querySelector("#weather-forecast");
    forecastElement.innerHTML = forecastHtml;
}
    
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
searchCity("Paris");
displayForecast();
