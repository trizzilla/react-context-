import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//CSS
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
