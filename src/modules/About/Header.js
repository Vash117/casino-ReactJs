import React from "react";

const Header = (params) => {
  return (
    <h1 style={{ color: params.colors ? params.colors : "" }}>
      {params.title}
    </h1>
  );
};
export default Header;
