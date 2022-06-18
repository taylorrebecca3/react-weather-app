import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./weatherinfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.info.name}</h2>
      <h3>
        <FormattedDate date={props.info.date} />
      </h3>

      <h3 className="temperature">
        {Math.round(props.info.temperature)} {"    "}
        <a className="degrees" href="/">
          °C
        </a>{" "}
        |{" "}
        <a className="degrees" href="/">
          °F
        </a>
      </h3>
      <h3 className="Description">{props.info.description}</h3>
      <WeatherIcon code={props.info.icon} />

      <h4>Humidity: {Math.round(props.info.humidity)}%</h4>
      <h4>Winds: {Math.round(props.info.wind)} km/hr</h4>
    </div>
  );
}
