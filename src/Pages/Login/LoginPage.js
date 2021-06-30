import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../Redux/Login/loginAction';
import './login.css'

const LoginPage = () => {
  const dataUser = [
    {
      "username": "ardi",
      "role": "user",
      "password": "ardi000"
    },
    {
      "username": "admin",
      "role": "admin",
      "password": "admin000"
    }
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  
  // Get User Role
  const userRole = dataUser
    .filter(du => du.username === username)
    .map(u => u.role);
    const rl = Object.assign({}, userRole)
    const role = rl[0]

  const dataUserLogin = {
    "username": username,
    "role": role,
    "isLogedin": true
  }

  const handleLogin = () => {
    if( dataUser.filter(du => du.username === username).length !== 0 &&
        dataUser.filter(du => du.password === password).length !== 0) {
      dispatch(action.userLogin(dataUserLogin))
      console.log("LOGIN SUCCES")
    } else {
      console.log("LOGIN FAILED......!!!");
    }
  };

  return (
    <div className="con-login-page">
      <form className="con-login-form"  onSubmit={handleLogin}>
        <h3>Todo</h3>
        <input 
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input 
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage;