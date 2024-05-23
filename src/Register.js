// frontend/src/Register.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      alert(res.data.msg);
      navigate("/login"); 
    } catch (err) {
      if (err.response && err.response.data) {
        alert(err.response.data.msg);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="register">
      <form className="form card" onSubmit={handleRegister}>
        <div className="card_header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
            ></path>
          </svg>
          <h1 className="form_heading">Register</h1>
        </div>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            name="username"
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            name="user_password"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button" type="submit">
            Register
          </button>
        </div>
        <div className="field">
          <Link to="/login" className="register-btn">
            Already regsiter?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
