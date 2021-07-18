import React from "react";
import { Home, About, Objects, Navbar, Footer } from "./components/index";
import { Route, Switch } from "react-router-dom";
import Header from "./components/main/Header";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/archive" component={Objects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
