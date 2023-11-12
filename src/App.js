import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ padding: "1rem" }}>Weather App</h1>
        <Weather defaultCity="Durban" />
        <footer className="footer">
          Coded by <strong>Makanaka G</strong>
          <a
            href="https://github.com/Maka119/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          <br/>
          <a
            href="https://jb-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="netlify-link"
          >
            and hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
