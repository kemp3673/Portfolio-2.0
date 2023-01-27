import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    axios.get('/weather').then((response) => {
      setWeather(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const timeParse = (timestamp) => {
    let time = timestamp.split(" ")[1];
    //TODO add AM/PM
    return time;
  }

  return (
    <div className="weather">
      <div className="weather__container">
        <div className="weather__container__left">
          <h1>Local Weather</h1>
        </div>
        <div className="weather__container__right">
          <div>{weather ?
            <div>
              <h2>{weather.location.name}, {weather.location.region}</h2>
              <h3>Current Time in {weather.location.name}: {timeParse(weather.location.localtime)}</h3>
              <h3>Current Temperature: {weather.current.temperature}&deg;C / {(weather.current.temperature * (9/5)) + 32}&deg;F</h3>
              <h3>Feels Like: {weather.current.feelslike}&deg;C / {(weather.current.feelslike * (9/5)) + 32}&deg;F</h3>
              <h3>Wind Speed: {Math.round(weather.current.wind_speed * 0.621371)} mph</h3>
              <figure>
                <img src={weather.current.weather_icons[0]} alt="Current Weather Icon"/>
                <figcaption>{weather.current.weather_descriptions[0]}</figcaption>
              </figure>
            </div>
          : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;