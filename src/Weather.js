import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h2>Toronto</h2>
      <h4>Last updated: Today</h4>
      <h3>
        25
        <a href="#">°C</a> | <a href="#">°F</a>
      </h3>
      Sunny ☀
    </div>
  );
}
