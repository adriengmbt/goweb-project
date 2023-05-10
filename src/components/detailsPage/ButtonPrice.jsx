import React from "react";

function ButtonPrice({ onClick, disabled }) {

  return ( 
    // TODO BUTTON DISABLE

    <button className="button" onClick={onClick} disabled={disabled}>Update product</button>
  );
}

export default ButtonPrice;
