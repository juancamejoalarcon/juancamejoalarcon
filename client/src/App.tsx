import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, CV, Blog } from './Pages'
import { Contact } from 'Pages/Contact/Contact'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
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
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
        <Footer/>
      </Router>
    );
  }
}

export default App;
