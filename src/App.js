import React from "react";
import {
  Home,
  About,
  Objects,
  Navbar,
  Footer,
  LinkLatch,
  LinkBloomberg,
  LinkPSD,
  LinkCoca,
} from "./components/index";
import { Route, Switch } from "react-router-dom";
import Header from "./components/main/Header";
import "./assets/css/app.css";

function App() {
  return (
    <div className="app_root">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/archive" component={Objects} />
        <Route exact path="/archive-latch" component={LinkLatch} />
        <Route exact path="/archive-bloomberg" component={LinkBloomberg} />
        <Route exact path="/archive-surf" component={LinkPSD} />
        <Route exact path="/archive-coke" component={LinkCoca} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
