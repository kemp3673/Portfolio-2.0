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
      console.log("There was a problem getting the weather data.");
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
              <h3>Local Temperature: {weather.current.temp_c}&deg;C / {weather.current.temp_f}&deg;F</h3>
              <h3>Feels Like: {weather.current.feelslike_c}&deg;C / {weather.current.feelslike_f}&deg;F</h3>
              <h3>Wind Speed: {weather.current.wind_mph} mph</h3>
              <figure>
                <img src={weather.current.condition.icon} alt="Current Weather Icon"/>
                <figcaption>{weather.current.condition.text}</figcaption>
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