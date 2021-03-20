import React from "react";

const Input = (props) => {
  const { name, onChange, value, label, error,type } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        placeholder={name}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
