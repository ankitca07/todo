export const addTask = (task) => ({ type: "ADD_TASK", payload: task });
export const deleteTask = (id) => ({ type: "DELETE_TASK", payload: id });

export const login = (username) => ({ type: "LOGIN", payload: username });
export const logout = () => ({ type: "LOGOUT" });

export const fetchWeather = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true"
    );
    const data = await response.json();
    dispatch({
      type: "FETCH_WEATHER_SUCCESS",
      payload: { temp: data.current_weather.temperature, description: "Sunny" },
    });
  } catch (error) {
    dispatch({ type: "FETCH_WEATHER_FAILURE" });
  }
};
