import React from "react";
import NavAnchor from "./NavAnchor.js";
import LoggedIn from "./LoggedUser.js";
import NotLogged from "./NotLogged.js";
let Nav = (props) => {
  return (
    <nav>
      <NavAnchor text="Home" />
      <NavAnchor text="Slots" />
      <NavAnchor text="About" />
      {props.user ? (
        <LoggedIn user={props.user} setUserIn={props.setUserIn} />
      ) : (
        <NotLogged />
      )}
    </nav>
  );
};

export default Nav;
