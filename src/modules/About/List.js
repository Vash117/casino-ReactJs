import React from "react";

const List = (props) => {
  return (
    <li
      style={{
        textDecoration: props.list.includes("done") ? "line-through" : "",
      }}
    >
      {props.list}
    </li>
  );
};

export default List;
