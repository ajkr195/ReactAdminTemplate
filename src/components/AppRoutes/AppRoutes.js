import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../app-configs/routesConfig";

const AppRoutes = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
};

export default AppRoutes;
