import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/app.module";
import "@material-design-icons/font";
import "mdui/mdui.css";
import "./styles.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
