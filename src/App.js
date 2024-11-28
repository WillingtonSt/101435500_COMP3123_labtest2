import React, { useState } from "react";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherForecast from "./components/WeatherForecast";
import "./App.css"

const App = () => {
  const [weather, setWeather] = useState(null); // Stores weather data
  const [error, setError] = useState(""); // Stores error messages
  const [forecast, setForecast] = useState(null);

  const API_KEY = "a7b1a77e7a4819e09d988e106ed25209"; // Replace with your OpenWeather API key

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    if (!city) {
      setError("Please enter a city.");
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found.");
      const data = await response.json();
      setWeather(data);


      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!forecastResponse.ok) throw new Error("Forecast not found.");
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);


      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <div>
      <h1>Weather App</h1>
      <WeatherInput fetchWeather={fetchWeather} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    
      {weather && <WeatherDisplay weather={weather} />}
      </div>
      {forecast && <WeatherForecast forecast={forecast} />}
     
    </div>
  );
};

export default App;
