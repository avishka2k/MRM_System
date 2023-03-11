import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function MyApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = () => {
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/admin/register`, {
        name,
        email,
        password,
      })
      .then((res) => toast.error(res.data))
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/admin/login`, {
        email,
        password,
      })
      .then((res) => {
        toast.success(res.data);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {loggedIn ? (
        <h1>You are logged in</h1>
      ) : (
        <>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>

          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default MyApp;
