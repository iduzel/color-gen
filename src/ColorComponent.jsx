import React from "react";
import "./ColorComponent.scss";

function ColorComponent(props) {


  return (
    <div className="color-component">
      <div style={{ backgroundColor: props.color }} className="colorCard">
        <button onClick={props.delete} className="close">
          X
        </button>
        <p>{props.color}</p>
        
      </div>
    </div>
  );
}

export default ColorComponent;
