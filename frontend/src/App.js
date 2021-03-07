import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ="/">
            <h1>Test</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
