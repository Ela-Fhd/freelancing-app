import React from "react";

function Input({ name = "", type, placeholder, onChange, value, label, id }) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-secondary-200 md:text-secondary-500"
      >
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        className="input_field w-full"
      />
    </>
  );
}

export default Input;
