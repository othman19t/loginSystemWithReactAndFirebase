import React, { Component } from "react";
import fire from "../firebase/fire";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error: [],
  };
  // To update the state values
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // to login the user
  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({
          error: "invalid email or password",
        });
      });
  };
  signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)

      .catch((error) => {
        this.setState({
          error: "Please make sure you are typing a valid email address",
        });
      });
  };
  render() {
    return (
      <div>
        <h1>this is LogIn poge</h1>
        <div>
          <p> {this.state.error} </p>
          <form action="/">
            <input
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
            <button onClick={this.login}>LogIn</button>
          </form>

          <button onClick={this.signup}>SignUp</button>
        </div>
      </div>
    );
  }
}

export default LogIn;
