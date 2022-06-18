import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <h3 className="temperature">
          {Math.round(props.celsius)} {"    "} °C |{" "}
          <a className="degrees" href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </h3>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h3 className="temperature">
          {Math.round(fahrenheit)} {"    "}
          <a className="degrees" href="/" onClick={convertToMetric}>
            °C
          </a>{" "}
          | °F
        </h3>
      </div>
    );
  }
}
