import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./weatherinfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo m-3">
      <h2 className="mt-3">{props.info.name}</h2>

      <FormattedDate date={props.info.date} />

      <WeatherIcon className="Icon" code={props.info.icon} />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <span className="fw-bold fs-4">
              <WeatherTemperature celsius={props.info.temperature} />
            </span>
            <h3 className="Description fs-4">{props.info.description}</h3>
          </div>
          <div className="col-2">
            <h4>Humidity: {Math.round(props.info.humidity)}%</h4>
            <h4>Winds: {Math.round(props.info.wind)} km/hr</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
