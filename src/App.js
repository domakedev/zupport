import React, { Fragment } from "react";

import "./App.css";

import Landing from "./components/Landing/Landing";
import P404 from "./components/404/404";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <Fragment>
      <Register/>
    </Fragment>
  );
}

export default App;
