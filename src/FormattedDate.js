import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();

  let mins = props.date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  return (
    <div>
      {day} {hour}:{mins}
    </div>
  );
}
