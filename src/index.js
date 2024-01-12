function showWeather (response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
}
function searchCity(city) {
    let apiKey = "94dfd32atb684f11d63dcb32odcaff90";
    let city = searchInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}$units=metric`;
    axios.get(apiUrl).then(showWeather);
}
function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
