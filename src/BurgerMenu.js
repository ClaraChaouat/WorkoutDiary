import React from "react";
import "./BurgerMenu.css";
import timeSolid from "./images/times-solid.svg";

import "./App.css";
import { stack as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  return (
    <Menu
      width={"250px"}
      height={"50px"}
      disableAutoFocus
      customCrossIcon={<img src={timeSolid} alt="cross icon" />}
    >
      <a className="menu-item single-movement" href="/">
        Single movement
      </a>
      <a className="menu-item flow" href="/">
        Flow
      </a>
      <a className="menu-item flight" href="/">
        Flight
      </a>
    </Menu>
  );
};

export default BurgerMenu;
