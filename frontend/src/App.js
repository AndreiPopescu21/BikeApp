import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import LoginPage from './Components/Pages/LoginPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ="/">
            <h1>Test</h1>
          </Route>
          <Route exact path ="/login" component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
