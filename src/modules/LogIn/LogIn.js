import React from "react";
import Header from "../About/Header";
import LogForm from "./LogForm";
import { useLocation } from "react-router-dom";
const LogIn = (props) => {
  let location = useLocation();
  const paths = location.pathname;

  return (
    <div style={{ textTransform: "capitalize" }}>
      <Header
        title={location.pathname.split("/").join("").replace("-", " ")}
        colors="white"
      />
      <LogForm
        setUserIn={props.setUserIn}
        isLogIn={paths === "/log-in" ? true : false}
      />
    </div>
  );
};

export default LogIn;
