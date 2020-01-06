import React from "react";
import { Route, Switch } from "react-router-dom";
import landingpage from "./Landingpage";
// import Contact from "./Contact";
import project from "./Project";
// import resume from "./Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    {/* <Route path="/Contact" component={Contact} /> */}
    <Route path="/project" component={project} />
    {/* <Route path="/resume" component={resume} /> */}
  </Switch>
);

export default Main;
