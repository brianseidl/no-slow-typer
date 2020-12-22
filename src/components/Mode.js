import React from "react";
import Description from "./Description.js";

class Mode extends React.Component {
  /**
   * React component constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = { data: "Clicking the buttons to start a test." };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(i) {
    switch (i) {
      case "s":
        this.setState({ data: "Short Mode Test" });
        break;

      case "m":
        this.setState({ data: "Medium Mode Test" });
        break;

      case "l":
        this.setState({ data: "Long Mode Test" });
        break;

      default:
        break;
    }
  }

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
        <Description description={this.state.data} />
        <div className="Mode-Group">
          <div
            id="short_btn"
            className="Mode-Selection Mode-Selection-Short"
            onMouseEnter={() => this.setNewNumber("s")}
          >
            <a href="/test/short" className="Mode-Button">
              Short
            </a>
          </div>
          <div
            id="medium_btn"
            className="Mode-Selection Mode-Selection-Medium"
            onMouseEnter={() => this.setNewNumber("m")}
          >
            <a href="/test/medium" className="Mode-Button">
              Medium
            </a>
          </div>
          <div
            id="long_btn"
            className="Mode-Selection Mode-Selection-Long"
            onMouseEnter={() => this.setNewNumber("l")}
          >
            <a href="/test/long" className="Mode-Button">
              Long
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Mode;
