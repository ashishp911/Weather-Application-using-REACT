import React, { useEffect, useState } from "react";
import "./style.css";
import  Report from "./Report"

const Temp = () => {
  
  const [seachValue, setSeachValue] = useState("Buffalo");
  const [tempInfo, setTempInfo] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY
  //  Fetch real word data
  const getWeatherInfo = async () => {
    try {
      
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${seachValue}&units=metric&appid=${API_KEY}`
      const res = await fetch(url);
      const data = await res.json();

      const {temp, humidity, pressure} = data.main;
      const {speed} = data.wind;
      const {name} = data;
      const {country, sunset} = data.sys;
      const weatherMood = data.weather[0].description;

      //  Making a new object

      const myNewWeatherObj = {temp, humidity, pressure, speed, name, country, sunset, weatherMood};
      setTempInfo(myNewWeatherObj);
    } catch (error) {
       console.log(error)
    }
  };
  
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search"
            autoFocus
            id="search"
            className="searchCity"
            value={seachValue}
            onChange={(e) => {
              setSeachValue(e.target.value);
            }}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* Sending temperature info as props to another component Report */}
      <Report tempInfo = {tempInfo} />
    </>
  );
};

export default Temp;
