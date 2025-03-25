const initialState = { tasks: [], weather: null, user: null };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null, tasks: [] };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
