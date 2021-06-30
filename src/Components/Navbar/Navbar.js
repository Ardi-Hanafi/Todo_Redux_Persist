import { useDispatch, useSelector } from 'react-redux';
import { loginUsernameSelector } from '../../Redux/Login/loginSelector';
import * as loginAction from '../../Redux/Login/loginAction';
import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  
  // Get Login Username
  const username = useSelector(loginUsernameSelector);

  // Logout
  const handleLogout = () => {
    dispatch(loginAction.userLogout())
  };

  return (
    <div className="nav">
      <div className="con-nav">
        <h1>Todo List</h1>
        <div className="username">
          <h4>{username.slice(0,1).toUpperCase()}</h4>
          <span>{username}</span>
          <span onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;