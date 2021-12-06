import React, { Fragment } from "react";

import "../../css/App.css";

//import Landing from "./Landing/Landing";
// import P404 from "./404/404";
// import { Login } from "./Login/Login";
// import { Register } from "./Register/Register";
import Communities from "./Communities/Communities";
import CreateCommunitie from "./CreateCommunitie/CreateCommunitie"

function App() {
  return (
    <Fragment>
      <Communities/>
      <CreateCommunitie/>
    </Fragment>
  );
}

export default App;
