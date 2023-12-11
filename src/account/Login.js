import React, {useState} from "react";

import axios from "axios";
import {useAuth} from "./Authentication";
import {useNavigate} from "react-router";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const {login} = useAuth();

  return (
      <form>
        <label>
          Username:
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Password:
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br/>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
  )

  async function handleLogin() {
    await axios.get('http://localhost:4414/account/administration/login',
        {
          params: {
            username: username,
            password: password
          }
        })
        .then(res => {
          login(res.data);
        });
    navigate('/');
  }
};

export default Login;