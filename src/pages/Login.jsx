import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      dispatch(login()); // Fake login action
      navigate("/"); // Navigate to homepage after login
    }
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    background: "linear-gradient( 135deg,#2c3e50, #0e1e20)",
    color: "#fff",
    fontFamily: '"Poppins", sans-serif',
    padding: "20px",
    textAlign: "center ",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    maxWidth: "360px",
    background: "rgba(255, 255, 255, 0.12)",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(6px)",
  };

  const inputStyle = {
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #666",
    background: "rgba(255, 255, 255, 0.15)",
    color: "#fff",
    outline: "none",
    transition: "border 0.3s ease, boxShadow 0.3s ease",
  };

  const buttonStyle = {
    background: "#ffcc00",
    color: "#222",
    border: "none",
    padding: "14px",
    fontSize: "16px",
    width: "100%",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background 0.3s ease-in-out, transform 0.2s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <h1>{isAuthenticated ? "Welcome!" : "Please Log In"}</h1>
      {!isAuthenticated ? (
        <div style={formStyle}>
          <input
            type="email"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </div>
      ) : (
        <button onClick={() => dispatch(logout())} style={buttonStyle}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
