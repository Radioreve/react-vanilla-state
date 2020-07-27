import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App/component";

ReactDOM.render(
  <React.StrictMode>
    <App name={"Jean"} />
  </React.StrictMode>,
  document.getElementById("root")
);
