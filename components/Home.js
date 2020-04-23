import React, { Component } from "react";
import LogOut from "./Logout";
import fire from "./../firebase/fire";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>this is home poge</h1>
        <LogOut />
      </div>
    );
  }
}

export default Home;
