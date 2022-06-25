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
    <div className="WeatherForecastDate text-center">
      <h4>{day()}</h4>
      <p>
        {Math.round(props.data.temp.max)}°{" "}
        <span className="opacity-75">| {Math.round(props.data.temp.min)}°</span>
      </p>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
    </div>
  );
}
