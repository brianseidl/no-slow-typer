import React from "react";
import logo from "../logo.svg";
import Mode from "./Mode.js";

class Home extends React.Component {
  /**
   * React render function.
   *
   * Preconditions:
   *   - Status of the component is updated.
   * Postconditions:
   *   - Component is rendered on page with latest data.
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NO SLOW TYPER</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Mode />
        </header>
      </div>
    );
  }
}

export default Home;
