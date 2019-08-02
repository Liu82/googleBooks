//importing from outside source
import React from "react";
import "./style.css";
//jumbotron
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
