import React from "react";

const Input = ({ onChange, type, placeholder, className }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
