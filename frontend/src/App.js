import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Home />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
