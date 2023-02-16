import React from "react";
import "./style.css";

const Report = () => {
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Buffalo, USA</div>
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
                19:19pm <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside">
                19:19pm <br />
                humidity
              </p>
            </div>            
          
          </div>

          <div className="weather-extra-info">
          <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside">
                19:19pm <br />
                humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside">
                19:19pm <br />
                humidity
              </p>
            </div>
            
          </div>
          
        </div>
      </article>
    </div>
  );
};

export default Report;
