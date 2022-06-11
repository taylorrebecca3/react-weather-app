import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

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
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function changeCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffb9bb5b2e4c77c5b97eed778979d6bf`;
    axios.get(apiUrl).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div className="Weather">
        {form}
        <h2>{city}</h2>
        <h3>
          {Math.round(temperature)} {"    "}
          <a className="degrees" href="/">
            °C
          </a>{" "}
          |{" "}
          <a className="degrees" href="/">
            °F
          </a>
        </h3>
        <h3 className="Description">{description}</h3>
        <img className="Icon" src={icon} alt={description} />
        <h4>Humidity: {Math.round(humidity)}%</h4>
        <h4>Winds: {Math.round(wind)} km/hr</h4>
      </div>
    );
  } else {
    return form;
  }
}
