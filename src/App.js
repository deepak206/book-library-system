import React from "react";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Routes from "./routes";

export default function App() {
  return (
    <div className="root">
      <Provider store={store()}>
        <Routes />
      </Provider>
    </div>
  );
}
