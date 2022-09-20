import React from "react";
import "./error.css";

export default function Error(props) {
  if (!props.errorModal) return null;
  return <h5 className="children"> {props.children}</h5>;
}
