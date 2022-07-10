import React from "react";
import NavAnchor from "./NavAnchor.js";
import { useNavigate } from "react-router-dom";
let LoggedIn = (props) => {
  const navigate = useNavigate("/");
  function handleLogOut(e) {
    console.log("here");
    e.preventDefault();
    console.log(props);
    props.setUserIn((prev) => (prev = ""));
    navigate("/");
  }
  return (
    <div className="user-nav">
      <p>Welcome {props.user}</p>
      <a onClick={handleLogOut}>Log out</a>
    </div>
  );
};

export default LoggedIn;
