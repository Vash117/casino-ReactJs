import React from "react";

const InputField = (props) => {
  return (
    <>
      <label htmlFor={props.inputName} />
      {props.place}
      <input
        type={props.imputType}
        name={props.inputName}
        placeholder={props.place}
      />
    </>
  );
};

export default InputField;
