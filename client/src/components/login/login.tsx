import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const userRedirect = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      if (res.data !== "") {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    userRedirect();
  }, []);
  return (
    <div>
      <img
        className="bg-belt"
        src="https://sep.yimg.com/ay/yhst-79187215592273/vintage-style-casual-jeans-leather-belt-for-men-41.jpg"
        alt="background image of belt"
      />
      <h1 className="login-title">Kurio.</h1>
      <h3 className="sign-in">Sign in.</h3>

      <div className="form-wrapper">
        <form>
          <div className="login-form">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="button"
              onClick={() => {
                axios({
                  method: "POST",
                  data: {
                    username: username,
                    password: password,
                  },
                  withCredentials: true,
                  url: "http://localhost:5000/login",
                }).then((res) => {
                  console.log(res);
                  userRedirect();
                });
              }}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                axios({
                  method: "POST",
                  data: {
                    username: username,
                    password: password,
                  },
                  withCredentials: true,
                  url: "http://localhost:5000/register",
                }).then((res) => {
                  console.log(res);
                  axios({
                    method: "POST",
                    data: {
                      username: username,
                      password: password,
                    },
                    withCredentials: true,
                    url: "http://localhost:5000/login",
                  }).then((res) => {
                    console.log(res);
                    userRedirect();
                  });
                });
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <button
        type="button"
        onClick={() => {
          axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/user",
          }).then((res) => console.log(res));
        }}
      >
        Current User
      </button>
    </div>
  );
}

export default Login;
