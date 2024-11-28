import React, { useState } from "react";

const WeatherInput = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleFetch = () => {
    fetchWeather(city); 
    setCity(""); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetch}>Get Weather</button>
    </div>
  );
};

export default WeatherInput;
