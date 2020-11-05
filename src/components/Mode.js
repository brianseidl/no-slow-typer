import React from 'react';
import {Description} from './Description.js';


class Mode extends React.Component {

    constructor(props) {
      super(props);
      this.state = { data: "Hovering on the buttons below to see the descriptions. Clicking the buttons to start a test." };
      this.setNewNumber = this.setNewNumber.bind(this);
    };
  
    setNewNumber(i) {
      switch (i) {
        case "s":
          this.setState({ data: "The description for short mode" })
          break;
  
        case "m":
          this.setState({ data: "The description for medium mode" })
          break;
  
        case "l":
          this.setState({ data: "The description for long mode" })
          break;
  
        default:
          break;
      }
    }
  
    render() {
  
      return (
        <div>
          <Description description={this.state.data} />
          <div className="Mode-Group">
            <div className="Mode-Selection Mode-Selection-Short" onMouseEnter={() => this.setNewNumber("s")}>
              <a href="/test" className="Mode-Button">Short</a>
            </div>
            <div className="Mode-Selection Mode-Selection-Medium" onMouseEnter={() => this.setNewNumber("m")}>
              <a href="/test" className="Mode-Button">Medium</a>
            </div>
            <div className="Mode-Selection Mode-Selection-Long" onMouseEnter={() => this.setNewNumber("l")}>
              <a href="/test" className="Mode-Button">Long</a>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Mode;