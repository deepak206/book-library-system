import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Paths from "./paths";
import history from "./history";

const Routes = props => (
  <Router history={history}>
    <Switch>
      {Paths.map((route, index) => {
        const { component: RouteComponent, routes, exact, path } = route;

        return (
          <Route
            exact={exact}
            key={index}
            path={path}
            render={() => <RouteComponent {...props} routes={routes} />}
          />
        );
      })}
    </Switch>
  </Router>
);

export default Routes;
