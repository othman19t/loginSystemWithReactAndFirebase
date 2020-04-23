import React, { Component } from "react";
import fire from "../firebase/fire";
class LogOut extends Component {
  state = {};
  logout = () => {
    fire.auth().signOut();   
  };

  render() {
    return (
      <div>
        <button onClick={this.logout}>log out</button>
      </div>
    );
  }
}

export default LogOut;
