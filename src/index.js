import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const d = new Date();
let day = weekday[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
// let hour = d.getHours();
// let minutes = d.getMinutes();
// let hours_12_format = hour >= 13 ? hour % 12 : hour
// let am_pm = hour > 12 ? 'PM' : 'AM'

document.getElementById('date').innerHTML = day + " " + date + " " + month + " " + year;
// document.getElementById('dayname').innerHTML = day;
// document.getElementById('time').innerHTML = (hours_12_format < 10 ? '0' + hours_12_format : hours_12_format) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am_pm">${am_pm}</span>`





let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  let city = document.getElementById('city');
  let link = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&units=metric&appid=6db1ce4c65998cebd56b814ceac00a66";
  let request = new XMLHttpRequest();
  request.open('GET', link, true);
  request.onload = function () {
    let obj = JSON.parse(this.response);
    document.getElementById('location').innerHTML = obj.name + ", " + obj.sys.country;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temper').innerHTML = obj.main.temp;
    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
    document.getElementById('humidity').innerHTML = obj.main.humidity + " " + "%";
    document.getElementById('speed').innerHTML = obj.wind.speed + " " + "km/h";
    document.getElementById('feels-like').innerHTML = "Feels Like" + " " + obj.main.feels_like + "°C";
    // document.getElementById('max-temp').innerHTML = obj.main.temp_max + "°C";
    document.getElementById('min-temp').innerHTML = obj.main.temp_min + "°C";
    document.getElementById('pressure').innerHTML = parseFloat(1013.25 / obj.main.pressure).toFixed(2) + " " + "atm";

    let sunrise_timeStamp = obj.sys.sunrise;
    const sunrise_time = new Date(sunrise_timeStamp * 1000);
    let sunrise_hour = sunrise_time.getHours();
    let sunrise_minutes = sunrise_time.getMinutes();
    let sunrise_hour_12 = sunrise_hour >= 13 ? sunrise_hour % 12 : sunrise_hour;
    let sunrise_am_pm = sunrise_hour > 12 ? 'PM' : 'AM';
    document.getElementById('sunrise').innerHTML = sunrise_hour_12 + ":" + (sunrise_minutes < 10 ? '0' + sunrise_minutes : sunrise_minutes) + ' ' + sunrise_am_pm;

    let sunset_timeStamp = obj.sys.sunset;
    const sunset_time = new Date(sunset_timeStamp * 1000);
    let sunset_hour = sunset_time.getHours();
    let sunset_minutes = sunset_time.getMinutes();
    let sunset_hour_12 = sunset_hour >= 13 ? sunset_hour % 12 : sunset_hour;
    let sunset_am_pm = sunset_hour > 12 ? 'PM' : 'AM';
    document.getElementById('sunset').innerHTML = sunset_hour_12 + ":" + (sunset_minutes < 10 ? '0' + sunset_minutes : sunset_minutes) + ' ' + sunset_am_pm;
  }
  request.send()

  const weekday_short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let newlink = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city.value + "&cnt=10&units=metric&appid=58b6f7c78582bffab3936dac99c31b25";
  let newrequest = new XMLHttpRequest();
  newrequest.open('GET', newlink, true);
  newrequest.onload = function () {
    let objnew = JSON.parse(this.response);
    // let timeStamp = objnew.list[1].dt;
    const forecast_day = new Date();
    let arr_val = forecast_day.getDay();
    let day_two = arr_val + 1;

    document.getElementById('day-two').innerHTML = weekday_short[(day_two > 6 ? day_two = 0 : day_two)];
    document.getElementById('day-two-temp').innerHTML = objnew.list[1].temp.day + "°C";

    let day_three = day_two + 1;
    document.getElementById('day-three').innerHTML = weekday_short[(day_three > 6 ? day_three = 0 : day_three)];
    document.getElementById('day-three-temp').innerHTML = objnew.list[2].temp.day + "°C";

    let day_four = day_three + 1;
    document.getElementById('day-four').innerHTML = weekday_short[(day_four > 6 ? day_four = 0 : day_four)];
    document.getElementById('day-four-temp').innerHTML = objnew.list[3].temp.day + "°C";

    let day_five = day_four + 1;
    document.getElementById('day-five').innerHTML = weekday_short[(day_five > 6 ? day_five = 0 : day_five)];
    document.getElementById('day-five-temp').innerHTML = objnew.list[4].temp.day + "°C";

    let day_six = day_five + 1;
    document.getElementById('day-six').innerHTML = weekday_short[(day_six > 6 ? day_six = 0 : day_six)];
    document.getElementById('day-six-temp').innerHTML = objnew.list[5].temp.day + "°C";
  }
  newrequest.send()
});



navigator.geolocation.getCurrentPosition(function (position) {
  let link = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=6db1ce4c65998cebd56b814ceac00a66";
  let request = new XMLHttpRequest();
  request.open('GET', link, true);
  request.onload = function () {
    let obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name + ", " + obj.sys.country;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temper').innerHTML = obj.main.temp;
    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
    document.getElementById('humidity').innerHTML = obj.main.humidity + " " + "%";
    document.getElementById('speed').innerHTML = obj.wind.speed + " " + "km/h";
    document.getElementById('feels-like').innerHTML = "Feels Like" + " " + obj.main.feels_like + "°C";
    // document.getElementById('max-temp').innerHTML = obj.main.temp_max + "°C";
    document.getElementById('min-temp').innerHTML = obj.main.temp_min + "°C";
    document.getElementById('pressure').innerHTML = parseFloat(1013.25 / obj.main.pressure).toFixed(2) + " " + "atm";

    let sunrise_timeStamp = obj.sys.sunrise;
    const sunrise_time = new Date(sunrise_timeStamp * 1000);
    let sunrise_hour = sunrise_time.getHours();
    let sunrise_minutes = sunrise_time.getMinutes();
    let sunrise_hour_12 = sunrise_hour >= 13 ? sunrise_hour % 12 : sunrise_hour;
    let sunrise_am_pm = sunrise_hour > 12 ? 'PM' : 'AM';
    document.getElementById('sunrise').innerHTML = sunrise_hour_12 + ":" + (sunrise_minutes < 10 ? '0' + sunrise_minutes : sunrise_minutes) + ' ' + sunrise_am_pm;

    let sunset_timeStamp = obj.sys.sunset;
    const sunset_time = new Date(sunset_timeStamp * 1000);
    let sunset_hour = sunset_time.getHours();
    let sunset_minutes = sunset_time.getMinutes();
    let sunset_hour_12 = sunset_hour >= 13 ? sunset_hour % 12 : sunset_hour;
    let sunset_am_pm = sunset_hour > 12 ? 'PM' : 'AM';
    document.getElementById('sunset').innerHTML = sunset_hour_12 + ":" + (sunset_minutes < 10 ? '0' + sunset_minutes : sunset_minutes) + ' ' + sunset_am_pm;
  }
  request.send()

  const weekday_short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let newlink = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&cnt=10&units=metric&appid=58b6f7c78582bffab3936dac99c31b25";
  let newrequest = new XMLHttpRequest();
  newrequest.open('GET', newlink, true);
  newrequest.onload = function () {
    let objnew = JSON.parse(this.response);
    console.log(objnew);


    // let timeStamp = objnew.list[1].dt;
    const forecast_day = new Date();
    let arr_val = forecast_day.getDay();
    let day_two = arr_val + 1;
    document.getElementById('day-two').innerHTML = weekday_short[(day_two > 6 ? day_two = 0 : day_two)];
    document.getElementById('day-two-temp').innerHTML = objnew.list[1].temp.day + "°C";

    let day_three = day_two + 1;
    document.getElementById('day-three').innerHTML = weekday_short[(day_three > 6 ? day_three = 0 : day_three)];
    document.getElementById('day-three-temp').innerHTML = objnew.list[2].temp.day + "°C";

    let day_four = day_three + 1;
    document.getElementById('day-four').innerHTML = weekday_short[(day_four > 6 ? day_four = 0 : day_four)];
    document.getElementById('day-four-temp').innerHTML = objnew.list[3].temp.day + "°C";

    let day_five = day_four + 1;
    document.getElementById('day-five').innerHTML = weekday_short[(day_five > 6 ? day_five = 0 : day_five)];
    document.getElementById('day-five-temp').innerHTML = objnew.list[4].temp.day + "°C";

    let day_six = day_five + 1;
    document.getElementById('day-six').innerHTML = weekday_short[(day_six > 6 ? day_six = 0 : day_six)];
    document.getElementById('day-six-temp').innerHTML = objnew.list[5].temp.day + "°C";
  }
  newrequest.send()
});