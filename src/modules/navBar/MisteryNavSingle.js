import React from "react";

const MisteryNavSingle = (params) => {
  return (
    <div
      className="mistery-single"
      style={{ color: params.misteryColor ? params.misteryColor : params.name }}
    >
      <h1>{params.name}</h1>
      <p className="odometer">{params.price.toFixed(2)}</p>
    </div>
  );
};

export default MisteryNavSingle;
