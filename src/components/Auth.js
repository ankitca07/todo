import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      setUsername("");
    }
  };

  return (
    <div className="auth-container">
      {user ? (
        <>
          <p>Welcome, {user}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};
