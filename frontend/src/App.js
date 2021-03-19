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
import TrackerPage from './Components/Pages/TrackerPage';
import { useEffect, useState } from 'react';
import pick from 'lodash/pick'
import haversine from 'haversine'

function App() {

  const [routeCoordinates, setrouteCoordinates] = useState([]);
  const [distanceTravelled, setdistanceTravelled] = useState(0);
  const [prevL, setprevL] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => { setprevL(pick(position.coords, ['latitude', 'longitude']))},
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    let watchID = navigator.geolocation.watchPosition((position) => {
      const positionLatLngs = pick(position.coords, ['latitude', 'longitude'])
      setrouteCoordinates(oldArray => [...oldArray, positionLatLngs])
      
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    }
  }, []);

  function calcDistance(prevLatLng,newLatLng) {
    return (haversine(prevLatLng, newLatLng) || 0)
  }

  useEffect(() => {
    console.log(routeCoordinates)
    if(routeCoordinates.length > 1){
    const newLatLngs = routeCoordinates[routeCoordinates.length-1]

    setdistanceTravelled(oldDistance => oldDistance + calcDistance(prevL,newLatLngs))
    setprevL(newLatLngs)
  }
  }, [routeCoordinates])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/gps" component={GPSPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/getinformations" component={GetInformationsPage} />
          <PrivateRoute exact path="/fitness" component={FitnessPage} />
          <Route exact path="/tracker" render={(props) => (
          <TrackerPage {...props} distance={distanceTravelled} />
          )} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
