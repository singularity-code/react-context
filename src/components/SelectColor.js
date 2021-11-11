import React from "react";
import ColorContext from "../contexts/color";

const colors = [
  "#FFC0CB",
  "#FFB6C1",
  "#FF69B4",
  "#FF1493",
  "#C71585",
  "#DB7093",
];

const SelectColor = () => {
  return (
    <div>
      <h2>Choose a color</h2>
      <ColorContext.Consumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                // right click to change subcolor
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorContext.Consumer>
    </div>
  );
};

export default SelectColor;
