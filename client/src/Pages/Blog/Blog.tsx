import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Feed } from './components'

export default class Blog extends Component<unknown, { blogsList: any[] }> {

  constructor(props: { blogsList: any[] }) {
    super(props);
    this.state = {
      blogsList: []
    };
  }

  render(): JSX.Element {
    return (
      <Router>
          <Switch>
            <Route exact path="/blog">
              <Feed />
            </Route>
          </Switch>
      </Router>
    );
  }
}