import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDate from "./WeatherForecastDate";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <WeatherForecastDate data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ffb9bb5b2e4c77c5b97eed778979d6bf&units=metric`;

    axios.get(apiUrl).then(showForecast);
  }
}
