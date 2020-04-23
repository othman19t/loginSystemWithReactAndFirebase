import React, { Component } from "react";
import fire from "./firebase/fire";
import Home from "./components/Home";
import LogIn from "./components/Login";

class App extends Component {
  state = {
    user: {},
  };
  // To listen once the user is authenticated store the user id and the opposite
  authListenener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
    const userId = localStorage.getItem("user");
  };

  componentDidMount() {
    this.authListenener();
    //console.log(localStorage.getItem("user"));
  }

  render() {
    return <div className="App">{this.state.user ? <Home /> : <LogIn />}</div>;
  }
}

export default App;
