import Weather from "./weather";
import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container mb-0">
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
          <a
            href="https://jb-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="netlify-link"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
