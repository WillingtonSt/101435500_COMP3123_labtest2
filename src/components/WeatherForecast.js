import React from "react";

const WeatherForecast = ({ forecast }) => {
  const dailyForecasts = forecast.list.reduce((acc, curr) => {
    const date = new Date(curr.dt * 1000).toLocaleDateString("en-CA", {
      weekday: "long",
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(curr);
    return acc;
  }, {});

  return (
    <div className="forecast-container">
      {Object.entries(dailyForecasts).map(([day, entries]) => {
        const { main, weather } = entries[0];
        const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        return (
          <div key={day} className="forecast-card">
            <h3>{day}</h3>
            <img src={iconUrl} alt={weather[0].description} />
            <p><strong>Temp:</strong> {main.temp}°C</p>
            <p><strong>Weather:</strong> {weather[0].description}</p>
            <p><strong>Humidity:</strong> {main.humidity}%</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;
