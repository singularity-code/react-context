import React from "react";
import ColorContext from "../contexts/color";

const Colorbox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: "100%", height: "30px", background: value.color }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};

export default Colorbox;
