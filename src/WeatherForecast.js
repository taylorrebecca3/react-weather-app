import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDate from "./WeatherForecastDate";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ffb9bb5b2e4c77c5b97eed778979d6bf&units=metric`;

    axios.get(apiUrl).then(showForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <hr />
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDate data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}
