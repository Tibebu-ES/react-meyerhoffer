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
  LinkHundred,
  LinkApple,
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
        <Route exact path="/archive-tork" component={LinkHundred} />
        <Route exact path="/archive-apple" component={LinkApple} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
