import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDate(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDate">
      <h4>{day()}</h4>
      <h5>
        {Math.round(props.data.temp.max)}° | {Math.round(props.data.temp.min)}°
      </h5>
      <WeatherIcon code={props.data.weather[0].icon} />
    </div>
  );
}
