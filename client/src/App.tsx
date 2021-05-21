import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, CV, Blog } from './Pages'
import Header from 'components/header/Header'
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cv">
              <CV />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
