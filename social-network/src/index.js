import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
