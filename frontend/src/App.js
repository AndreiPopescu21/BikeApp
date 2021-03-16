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
import { useEffect, useState } from 'react';
import pick from 'lodash/pick'

function App() {

const [routeCoordinates,setrouteCoordinates] = useState([]);
useEffect (() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {console.log(pick(position.coords, ['latitude', 'longitude']))},
    (error) => alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  )
  let watchID = navigator.geolocation.watchPosition((position) => {
    const positionLatLngs = pick(position.coords, ['latitude', 'longitude'])
    setrouteCoordinates(oldArray =>[...oldArray, positionLatLngs]);
    //NOTE : duplicate entries appear in the array
    //console.log(positionLatLngs)
  });
  return ()=>{
    navigator.geolocation.clearWatch(watchID);
  }
}, []);
useEffect(()=>{
  console.log(routeCoordinates)
},[routeCoordinates])
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
