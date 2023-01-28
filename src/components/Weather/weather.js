import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = React.useState(null);

  // Get weather data from API when component mounts
  React.useEffect(() => {
    axios.get('/weather').then((response) => {
      setWeather(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  // Convert timestamp to time
  const timeParse = (timestamp) => {
    let time = timestamp.split(" ")[1];
    let hrMin = time.split(":");
    let hour = Number(hrMin[0]);
    if (hour > 12) {
      hour = hour - 12;
      time = hour + ":" + hrMin[1] + " PM";
    } else {
      time = hour + ":" + hrMin[1] + " AM";
    }
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
              <h3>Local Time in {weather.location.name}: {timeParse(weather.location.localtime)}</h3>
              <h3>Local Temperature: {weather.current.temperature}&deg;C / {Math.round((weather.current.temperature * (9/5)) + 32)}&deg;F</h3>
              <h3>Feels Like: {weather.current.feelslike}&deg;C / {Math.round((weather.current.feelslike * (9/5)) + 32)}&deg;F</h3>
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