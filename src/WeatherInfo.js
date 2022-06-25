import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./weatherinfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo m-3">
      <h2 className="mt-3">{props.info.name}</h2>

      <FormattedDate date={props.info.date} />

      <WeatherIcon className="Icon" code={props.info.icon} size={52} />
      <div className="container">
        <div className="row ml-2">
          <div className="col-2">
            <h3 className="fw-bold fs-4 mt-3">
              {Math.round(props.info.temperature)}°C
              <p className="fw-normal">{props.info.description}</p>
            </h3>
          </div>
          <div className="col-2 mt-3">
            <h4>Humidity: {Math.round(props.info.humidity)}%</h4>
            <h4>Winds: {Math.round(props.info.wind)} km/hr</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
