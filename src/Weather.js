import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weather, SetWeather] = useState({ ready: false });
  let [city, setCity] = useState("");

  const form = (
    <form onSubmit={changeCity}>
      <input
        className="search-bar"
        type="text"
        placeholder="What city are you looking for?"
        autoComplete="off"
        onChange={updateCity}
      />
      <br />
      <input type="submit" value="Take me there" className="submit-button" />
      <input
        type="submit"
        value="Current Location"
        className="current-button"
      />
    </form>
  );

  function getWeather(response) {
    SetWeather({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      name: response.data.name,
    });
  }

  function changeCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffb9bb5b2e4c77c5b97eed778979d6bf`;
    axios.get(apiUrl).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.temperature) {
    return (
      <div className="Weather">
        {form}
        <h2>{weather.name}</h2>
        <h3>
          <FormattedDate date={weather.date} />
        </h3>

        <h3>
          {Math.round(weather.temperature)} {"    "}
          <a className="degrees" href="/">
            °C
          </a>{" "}
          |{" "}
          <a className="degrees" href="/">
            °F
          </a>
        </h3>
        <h3 className="Description">{weather.description}</h3>
        <img className="Icon" src={weather.icon} alt={weather.description} />
        <h4>Humidity: {Math.round(weather.humidity)}%</h4>
        <h4>Winds: {Math.round(weather.wind)} km/hr</h4>
      </div>
    );
  } else {
    return form;
  }
}
