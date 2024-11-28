import React from "react";

const WeatherDisplay = ({ weather }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  
    
    const getBackgroundClass = () => {
      const main = weather.weather[0].main.toLowerCase();
      if (main.includes("cloud")) return "cloudy";
      if (main.includes("rain")) return "rainy";
      if (main.includes("clear")) return "clear";
      if (main.includes("snow")) return "snowy";
      return "default";
    };
  
    return (
      <div className={`weather-info ${getBackgroundClass()}`}>
        <h2>{weather.name}, {weather.sys.country}</h2>
        <img src={iconUrl} alt={weather.weather[0].description} className="weather-icon" />
        <div className="weather-details">
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Weather:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      </div>
    );
  };

export default WeatherDisplay;

