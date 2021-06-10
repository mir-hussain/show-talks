import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
