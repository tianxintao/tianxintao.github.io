import React from "react";
import { Route, Switch } from "react-router-dom";
import landingpage from "./landingpage";
import contact from "./contact";
import project from "./project";
import resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/contact" component={contact} />
    <Route path="/project" component={project} />
    <Route path="/resume" component={resume} />
  </Switch>
);

export default Main;
