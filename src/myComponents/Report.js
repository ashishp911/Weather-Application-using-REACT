import React, { useEffect, useState } from "react";
import "./style.css";


const Report = ({tempInfo}) => {
  const [weatherState, setWeatherState] = useState("");
  const {temp, humidity, pressure, speed, name, country, sunset, weatherMood} = tempInfo;
  
  //
  useEffect(() => {
    if(weatherMood){
      switch(weatherMood){
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "fog":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "smoke":
          setWeatherState("wi-smoke");
          break;
        case "mist":
          setWeatherState("wi-dust");
          break;
        case "overcast clouds":
          setWeatherState("wi-day-sunny-overcast");
          break;
            
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood])
  
  
  // Converting seconds to time
  let date = new Date(sunset*1000)
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`

  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">
          {new Date().toLocaleString()}
        </div>

        {/* ADDING 4 COLUMNS HERE */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p><i className={"wi wi-sunset"}></i></p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>            
          
          </div>

          <div className="weather-extra-info">
          <div className="two-sided-section">
              <p><i className={"wi wi-rain"}></i></p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-strong-wind"}></i></p>
              <p className="extra-info-leftside">
                {speed} <br />
                Wind Speed
              </p>
            </div>
            
          </div>
          
        </div>
      </article>
    </div>
  );
};

export default Report;
