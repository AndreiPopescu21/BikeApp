import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginPage from './Components/Pages/LoginPage';
import GPSPage from './Components/Pages/GPSPage';
import ProfilePage from './Components/Pages/ProfilePage'
import PrivateRoute from './Routes/PrivateRoute';
import HomePage from './Components/Pages/HomePage';
import GetInformationsPage from './Components/Pages/GetInformationsPage';
import FitnessPage from './Components/Pages/FitnessPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <PrivateRoute exact path="/gps" component = {GPSPage}/>
          <PrivateRoute exact path="/profile" component = {ProfilePage}/>
          <PrivateRoute exact path="/getinformations" component = {GetInformationsPage}/>
          <PrivateRoute exact path="/fitness" component = {FitnessPage}/>
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
