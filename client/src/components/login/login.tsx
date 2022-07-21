import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
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
            }).then((res) => console.log(res));
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
            }).then((res) => console.log(res));
          }}
        >
          Register
        </button>
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
      </form>
    </div>
  );
}

export default Login;
