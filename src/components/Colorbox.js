import React from "react";
import ColorConsumer from "../contexts/color";

const Colorbox = () => {
  return (
    <ColorConsumer>
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
    </ColorConsumer>
  );
};

export default Colorbox;
