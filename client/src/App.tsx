import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import './index.css';
class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
