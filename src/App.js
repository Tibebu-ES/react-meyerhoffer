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
  LinkPorsche,
  AboutMagazine,
  AboutJournal,
  LinkSoundBox,
  LinkCharge,
  LinkCloth,
  LinkGlass,
  LinkPowering,
  LinkNeilpryde,
  LinkDanger,
  LinkCappellini,
} from "./components/index";
import { Route, Switch } from "react-router-dom";
import Header from "./components/main/Header";

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
        <Route exact path="/archive-porsche" component={LinkPorsche} />
        <Route exact path="/outsidemagazine" component={AboutMagazine} />
        <Route exact path="/surfersjournal" component={AboutJournal} />
        <Route exact path="/archive-sound" component={LinkSoundBox} />
        <Route exact path="/archive-charge" component={LinkCharge} />
        <Route exact path="/archive-clothing" component={LinkCloth} />
        <Route exact path="/archive-glass" component={LinkGlass} />
        <Route exact path="/archive-powerring" component={LinkPowering} />
        <Route exact path="/archive-neilpryde" component={LinkNeilpryde} />
        <Route exact path="/archive-danger" component={LinkDanger} />
        <Route exact path="/archive-cappellini" component={LinkCappellini} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
