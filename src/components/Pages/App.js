import React, { Fragment } from "react";

import "../../css/App.css";

//import Landing from "./Landing/Landing";
 /*import P404 from "./404/404";
 import { Login } from "./Login/Login";
 import { Register } from "./Register/Register";*/
 import {CommunityPosts} from "./CommunityPosts/CommunityPosts"

function App() {
  return (
    <Fragment>
      <CommunityPosts />
    </Fragment>
  );
}

export default App;
