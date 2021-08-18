import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import friendsList from './components/FriendsList'

function App() {
  return (
  <Router>
    <div className="App">
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            {localStorage.getItem("token") && <div>
              <Link to="/protected">Protected Page</Link>
            </div>
            }
          </li>
        </ul>
    </div>
    <Switch>
      <PrivateRoute exact path='/protected' component={friendsList}/>
      <PrivateRoute path='/logout' component={Logout}/>
      <Route path='/login' component={Login}/>
      <Route path='/' component={Home}/>
    </Switch>
  </Router>
  );
}

export default App;
