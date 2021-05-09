import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Pages'
import './index.css';

const Blog = React.lazy(() => import('./Pages/Blog/Blog'));
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
              <Suspense fallback={<div>Loading...</div>}>
                <section>
                  <Blog />
                </section>
              </Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
