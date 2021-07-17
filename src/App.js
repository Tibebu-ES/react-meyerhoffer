import React from "react";
import { Home, About, Objects, Navbar, Footer } from "./components/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/archive" component={Objects} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
