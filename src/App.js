import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Objects from "./components/Objects";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/archive" component={Objects} />
      <Footer />
    </>
  );
}

export default App;
