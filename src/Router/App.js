import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { loginIsLogedinSelector } from '../Redux/Login/loginSelector';
import HomePage from '../Pages/Home/homePage';
import LoginPage from '../Pages/Login/LoginPage';
import './App.css';

function App() {
  // Get IsLogedin Status
  const isLogedin = useSelector(loginIsLogedinSelector);
  
  return (
    <div className="con-all">
      {!isLogedin ? 
        (<Switch>
          <Route exact path="/login" component={LoginPage}/>
          <Redirect to="/login"/>
        </Switch>):
        (<Switch>
          <Route exact path="/home" component={HomePage}/>
          <Redirect to="/home"/>
        </Switch>)
      }
    </div>
  );
}

export default App;
