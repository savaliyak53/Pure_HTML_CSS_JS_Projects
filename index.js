const apiKey = "9aece8284cfa4ea381b32904232808";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";
var apiCity = "amreli";

// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");
// var weather = document.querySelector(".weather");

// async function checkWeather(city) {
//   const response = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=9aece8284cfa4ea381b32904232808&q=${city}&aqi=no`
//   );

//   if (response.status === 400) {
//     document.querySelector(".error").style.display = "block";
//   } else {
//     document.querySelector(".error").style.display = "none";
//     var data = await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML = data.location.name;
//     document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
//     document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
//     document.querySelector(".wind").innerHTML = `${data.current.wind_kph} KM/H`;
//     const weatherIcon = document.querySelector(".weather-icon");
//     weatherIcon.src = data.current.condition.icon;
//     weatherIcon.alt = data.current.condition.text;

//     weather.style.display = "block";
//   }
// }

// searchButton.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });

// searchBox.addEventListener("change", () => {
//   console.log(typeof searchBox.value);
//   if (searchBox.value === null || searchBox.value === "") {
//     weather.style.display = "none";
//   }
// });

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
let weather = document.querySelector(".weather");

async function fetchData(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=9aece8284cfa4ea381b32904232808&q=${city}&aqi=no`
  );
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = data.current.temp_c;
  document.querySelector(".humidity").innerHTML = data.current.humidity;
  const weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.src = data.current.condition.icon;
  weather.style.display = "block";
}

searchButton.addEventListener("click", () => {
  fetchData(apiCity);
});
