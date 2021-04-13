import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";  
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return(
    <>
      <Navbar/>
      <Switch>
        <Route exact Path="/" component={Home} />
        <Route exact Path="/about" component={About} />
        <Route exact Path="/contact" component={Contact} />
        <Route exact Path="/service" component={Service} />  
        <Redirect to="/" />
      </Switch> 
    </>
    );
};

export default App;