import React from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
const LogForm = (props) => {
  const navigate = useNavigate("/");
  function handleSubmit(e) {
    e.preventDefault();
    let data = {};
    let formData = new FormData(e.target);
    let name = formData.get("name");
    let pass = formData.get("password");
    data.name = name;
    data.pass = pass;
    if (!props.isLogIn) data.rePass = formData.get("repeate password");
    console.log(data);
    props.setUserIn(name);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField imputType="text" place="name" inputName="name" />
      <InputField imputType="password" place="password" inputName="password" />
      {!props.isLogIn ? (
        <InputField
          imputType="password"
          place="repeate password"
          inputName="repeate password"
        />
      ) : (
        ""
      )}
      <button type="submit">{!props.isLogIn ? "Register" : "Log in"}</button>
    </form>
  );
};

export default LogForm;
