import React from "react";

export const WeatherDisplay = ({ weather }) => {
  return weather ? <p>Weather: {weather.temp}°C, {weather.description}</p> : <p>Loading weather...</p>;
};

export const addTask = (task) => ({ type: "ADD_TASK", payload: task });
export const deleteTask = (id) => ({ type: "DELETE_TASK", payload: id });

export const fetchWeather = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true");
    const data = await response.json();
    dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: { temp: data.current_weather.temperature, description: "Sunny" } });
  } catch (error) {
    dispatch({ type: "FETCH_WEATHER_FAILURE" });
  }
};