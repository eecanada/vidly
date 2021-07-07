import React, { Component } from 'react';

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        autoFocus
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        className="form-control"
      />

      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default Input;
