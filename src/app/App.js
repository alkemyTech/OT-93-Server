import React from "react";
import logo from "../logo.svg";
import { Counter } from "../features/counter/Counter";
import "../css/App.css";
import Router from "./router";

function App() {
  return (
    <>
      <Router />
      <div className="App"></div>
    </>
  );
}

export default App;
