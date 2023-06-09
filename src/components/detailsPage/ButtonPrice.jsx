import React from "react";
// function who return a button with a function onClick and a disabled state
function ButtonPrice({ onClick, disabled }) {
  // if the button is disabled, we add a class to the button who change the style
  const buttonClassName = disabled ? "button button--disabled" : "button";

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      Update product
    </button>
  );
}

export default ButtonPrice;

