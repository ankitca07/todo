import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, fetchWeather } from "./redux/actions";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Auth } from "./components/Auth.js"; 
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const weather = useSelector((state) => state.weather);
  const user = useSelector((state) => state.user); 

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Advanced To-Do Application</h1>
      <Auth /> {/* Render Auth component for login/logout */}

      {user ? ( 
        <>
          <WeatherDisplay weather={weather} />
          <TaskInput onAddTask={(task) => dispatch(addTask(task))} />
          <TaskList tasks={tasks} onDeleteTask={(id) => dispatch(deleteTask(id))} />
        </>
      ) : (
        <p>Please log in to manage tasks.</p>
      )}
    </div>
  );
};

export default App;
