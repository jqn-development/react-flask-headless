import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithLayout } from "./components/routeWithLayout";
import Public from "./layouts/public";
import Main from "./containers/Main";
import SignIn from "./containers/SignIn/SignIn";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={SignIn}
        exact
        path="/sign-in"
        layout={Public}
      />
      <RouteWithLayout component={Main} exact path="/" layout={Public} />
    </Switch>
  );
};

export default Routes;
