import React from "react";
import "./BurgerMenu.css";

import "./App.css";
import { stack as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  return (
    <Menu width={"250px"} height={"50px"} disableAutoFocus>
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
