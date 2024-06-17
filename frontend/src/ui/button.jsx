import React from "react";

function Button({ color = "btn--green", children }) {
  return (
    <button type="submit" className={`btn ${color} w-full my-3`}>
      {children}
    </button>
  );
}

export default Button;
