import React from "react";

export const Module = ({ title, name, detail, duration }) => {
  return (
    <div className="sub">
      <h3 className="heading">{title}</h3>
      <label>Name: </label>
      <span>{name}</span>
      <br />
      <label>Details: </label>
      <span>{detail}</span>
      <br />
      <label>Duration: </label>
      <span>{duration}</span>
    </div>
  );
};
