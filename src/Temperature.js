import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let WeatherData = {
    date: "Sunday",
    time: "20:30",
    description: "Sunny",
    humidity: "65%",
    windspeed: "1.23 km/h",
    temperature: 15,
  };

  return (
    <div className="Temperature">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="city">
            London
          </h1>
          <p className="weather-app-details">
            <span id="time">
              {WeatherData.date} | {WeatherData.time}
            </span>{" "}
            | <span id="description">{WeatherData.description}</span>
            <br />
            Humidity <strong id="humidity">{WeatherData.humidity}</strong>, Wind
            <strong id="wind-speed"> {WeatherData.windspeed}</strong>
          </p>
        </div>
        <div className="weather-app-temperature">
          <div id="icon">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              class="weather-app-icon"
            />
          </div>
          <div className="weather-app-temperature-value" id="temperature">
            {WeatherData.temperature}
          </div>
          <div className="weather-app-units">
            <strong>ºC</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
