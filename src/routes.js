import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
