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
  LinkSnowboard,
  LinkSoftComputer,
  LinkSkigoggle,
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
        <Route exact path="/archive-snowboard" component={LinkSnowboard} />
        <Route exact path="/archive-chumby" component={LinkSoftComputer} />
        <Route exact path="/archive-skigoggles" component={LinkSkigoggle} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
