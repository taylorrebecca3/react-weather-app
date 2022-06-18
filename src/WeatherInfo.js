import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./weatherinfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.info.name}</h2>
      <h3>
        <FormattedDate date={props.info.date} />
      </h3>
      <WeatherTemperature celsius={props.info.temperature} />

      <h3 className="Description">{props.info.description}</h3>
      <WeatherIcon code={props.info.icon} />

      <h4>Humidity: {Math.round(props.info.humidity)}%</h4>
      <h4>Winds: {Math.round(props.info.wind)} km/hr</h4>
    </div>
  );
}
