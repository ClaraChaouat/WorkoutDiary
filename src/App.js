import "./App.css";
import React, { Component } from "react";
import "./LandingPage.js";
import LandingPage from "./LandingPage.js";
import BurgerMenu from "./BurgerMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BurgerMenu></BurgerMenu>
        <LandingPage />
      </div>
    );
  }
}

export default App;
