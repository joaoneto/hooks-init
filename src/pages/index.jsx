import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

export default () => {
  return (
    <Router>
      <Switch>
        {routes.map(route => <Route {...route} />)}
        <Route component={() => (<div>Not Found :(</div>)} />
      </Switch>
    </Router>
  );
};
