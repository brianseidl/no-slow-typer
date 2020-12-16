import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Typer from "./components/Typer.js";

class App extends React.Component {
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
      <div>
        <BrowserRouter>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/test/"} component={Typer} />
          <Route path={"/test/:mode"} component={Typer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
