import "./App.css";
import Weather from "./Weather";
import Banner from "./Banner";

export default function App() {
  return (
    <div className="App">
      <Banner />
      <Weather />
      <footer>
        <a
          href="https://github.com/taylorrebecca3/react-weather-app"
          target="_blank"
        >
          Open-sourced code
        </a>{" "}
        by{" "}
        <a href="https://github.com/taylorrebecca3" target="_blank">
          Rebecca Taylor
        </a>
      </footer>
    </div>
  );
}
