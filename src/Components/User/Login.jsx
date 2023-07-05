import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import UserContext from "./UserContext";

export default function Login() {
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const { getUserByEmail, setLoginStatus, loginStatus } =
    useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [loginStatus, setLoginStatus] = useState("");

  const handleButtonClick = () => {
    const user = getUserByEmail(email);

    if (user && user.password === password) {
      navigate("/");

      setLoginStatus("success");
    } else {
      setLoginStatus("failure");
    }
    console.log(setLoginStatus);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-header">Login</h3>
        <div>
          <input
            className="login-input"
            ref={inputRef}
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /> <br />
          <button
            className="signin-btn"
            onClick={handleButtonClick}
            type="button"
          >
            Sign In
          </button>
        </div>

        <h6>
          Don't have an account? <Link to="/register">Create</Link>
        </h6>
      </form>
      {loginStatus === "success" && (
        <p className="login-success">Login successful!</p>
      )}
      {loginStatus === "failure" && (
        <p className="login-failure" style={{ color: "red" }}>
          Login failed. Please try again.
        </p>
      )}
    </div>
    </div>
  );
}
