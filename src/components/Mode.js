import React from 'react';
import {Description} from './Description.js';
import {Route} from 'react-router-dom';
import {Test} from './TestPage.js';

export class Mode extends React.Component {

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
  
    goTest() {
        alert("test starts");
    }
    render() {
  
      return (
        <div>
          <Description description={this.state.data} />
          <div className="Mode-Group">
            <div className="Mode-Selection Mode-Selection-Short" onMouseEnter={() => this.setNewNumber("s")} onClick={() => this.goTest()}>
              <span>Short</span>
            </div>
            <div className="Mode-Selection Mode-Selection-Medium" onMouseEnter={() => this.setNewNumber("m")} onClick={() => this.goTest()}>
              <span>Medium</span>
            </div>
            <div className="Mode-Selection Mode-Selection-Long" onMouseEnter={() => this.setNewNumber("l")} onClick={() => this.goTest()}>
              <span>Long</span>
            </div>
          </div>
        </div>
      );
    }
  }