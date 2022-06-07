import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="Banner">
      <h1>What's the weather? 🌤</h1>
      <form>
        <input
          className="search-bar"
          type="text"
          placeholder="What city are you looking for?"
          autoComplete="off"
        />
        <br />
        <input type="submit" value="Take me there" className="submit-button" />
      </form>
    </div>
  );
}
