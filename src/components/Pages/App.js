import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "../../css/App.css";
import "../../mocks"

// import Landing from "./Landing/Landing";
// import P404 from "./404/404";
// import Login from "./Login/Login";
// import Register from "./Register/Register";
// import Communities from "./Communities/Communities";
// import CreateCommunitie from "./CreateCommunitie/CreateCommunitie"
//import HelpPost from "./NewPost/HelpPost";
import Landing from "./Landing/Landing";
/*import P404 from "./404/404";
 import { Login } from "./Login/Login";
 import { Register } from "./Register/Register";*/
import { CommunityPosts } from "./CommunityPosts/CommunityPosts";

function App() {
  return (
    <>
      <Landing/>
    </>
  );
}

export default App;
