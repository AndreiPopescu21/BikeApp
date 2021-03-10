import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginPage from './Components/Pages/LoginPage';
import GPSPage from './Components/Pages/GPSPage';
import ProfilePage from './Components/Pages/ProfilePage'
import PrivateRoute from './Routes/PrivateRoute';
import HomePage from './Components/Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <PrivateRoute exact path="/gps" component = {GPSPage}/>
          <PrivateRoute exact path="/profile" component = {ProfilePage}/>
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
