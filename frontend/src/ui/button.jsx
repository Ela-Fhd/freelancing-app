import React from "react";

function Button({ color = "btn--green", type, onClick, children }) {
  return (
    <button
      type={type}
      className={`btn ${color} w-full my-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
