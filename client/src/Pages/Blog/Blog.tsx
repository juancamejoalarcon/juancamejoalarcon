import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Feed } from 'Pages/Blog/components/feed/Feed'
import { BlogCreator } from 'Pages/Blog/components/blog-creator/BlogCreator'

export class Blog extends React.Component<unknown, { blogsList: any[] }> {

  constructor(props: { blogsList: any[] }) {
    super(props);
    this.state = {
      blogsList: [],
    };
  }

  Routered = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let match = useRouteMatch();
    return (
      <div>
        <Switch>
          <Route exact path={match.path}>
            <Feed />
          </Route>
          <Route exact path={`${match.path}/create`}>
            <BlogCreator />
          </Route>
        </Switch>
      </div>
        )
    }

  render() {
    return (
      <this.Routered />
    );
  }
}