import React, { useState } from "react";
import "./Login.scss";
import { useLoginStore } from "./useLoginStore";
import { useNavigate } from "react-router-dom";



const Login = () => {

const navigate = useNavigate()

const { loggedIn, setLoggedIn } = useLoginStore();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUser(user => ({
      ...user,
      [name]: value,
    }));
  };

  const { username, password } = user;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.mediehuset.net/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if(res.ok) {
        const user = await res.json();
        setLoggedIn(user)
        navigate("/")
      } else {
        console.log("Request failed " , res.status);
      }

    } catch (err) {
        console.error(err)
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <p>Enter your username and password to log in</p>
      <input
        type="text"
        value={username}
        name="username"
        id="username"
        onChange={handleChange}
        placeholder="Username"
        className="input-field"
      />
      <input
        type="password"
        value={password}
        name="password"
        id="password"
        onChange={handleChange}
        placeholder="Password"
        className="input-field"
      />
      <button className="login-button">Log in</button>
      <button className="cancel-button">Cancel</button> {
        loggedIn ? "Du er nu logged in" : " "
      }
    </form>
  );
};

export default Login;
