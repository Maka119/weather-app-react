import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ padding: "1rem" }}>Weather App</h1>
        <Weather defaultCity="Durban" />
        <footer className="footer">
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

export default App;
