import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Component/Main/Main";
import Navbar from "../src/Component/Navbar/Navbar";
import App from "./App";
import { HashRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
