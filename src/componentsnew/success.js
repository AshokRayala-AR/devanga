import React from "react";
import "./success.css";

export default function Success(props) {
  if (!props.success) return null;
  return <h5 className="childrens"> {props.children}</h5>;
}
