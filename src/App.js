import Weather from "./weather";
import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
      </header>
      <footer>
        Coded by <strong>MakanakaG</strong> and
        <a
          href="https://github.com/Maka119/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
