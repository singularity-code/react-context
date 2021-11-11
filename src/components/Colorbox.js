import React from "react";
import ColorContext from "../contexts/color";

const Colorbox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div>
          <div
            style={{
              width: "100%",
              height: "30px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "30px",
              background: value.state.subcolor,
            }}
          ></div>
        </div>
      )}
    </ColorContext.Consumer>
  );
};

export default Colorbox;
