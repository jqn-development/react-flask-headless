import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./containers/Main";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Main} path="/" />
    </Switch>
  );
};

export default Routes;
