import {Container, Row, Col, Button} from 'react-bootstrap';

import React, {Component} from 'react';
import Char from './Char.js';
import Stats from './Stats.js';


class Typer extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: this.props.text,
      input: "",
      startTime: 0,
      timerStarted: false
    };
  }

  resetState = () => {
    this.setState({
      text: this.props.text,
      input: "",
      startTime: 0,
      timerStarted: false
    });
  }

  handleChange = (event) => {
    if (event.target.value) {
      if (this.state.timerStarted) {
        this.setState({input: event.target.value});
      } else {
        this.setState({
          input: event.target.value,
          startTime: Date.now(),
          timerStarted: true
        });
      }
    } else {
      this.resetState();
    }
  }

  getFocus = () => {
    var inputBox = document.getElementById("inputBox");
    inputBox.focus();
  }

  render() {
    let textChars = this.state.text.split('');
    let inputChars = this.state.input.split('');
    let correctCount = 0;
    let incorrectCount = 0;

    const charblock = textChars.map((c, i) => {
      let isActive = false; 
      if (i === inputChars.length) {
        isActive = true;
      }
      if (inputChars[i]) {
        if (inputChars[i] === c) {
          correctCount += 1;
        } else {
          incorrectCount += 1;
        }
      }
      return (<Char key={i} isActive={isActive} expected={c} input={inputChars[i]} />);
    });

    return (
        <Container onClick={this.getFocus} className="mt-5">
          <Row>
            <Col sm={8} className="border border-dark rounded px-4 py-2">
              {charblock}
              <input
                id="inputBox"
                autoFocus="autoFocus"
                className="input-hidden"
                onChange={this.handleChange}
              />
            </Col>
            <Col sm={4} className="border boarder-dark rounded">
              {this.state.timerStarted &&
                <Stats
                  correctCount={correctCount}
                  incorrectCount={incorrectCount}
                  startTime={this.state.startTime}
                />
              }
              <Button onClick={this.resetState}>
                clear
              </Button>
            </Col>
          </Row>
        </Container>
    );
  }
};

Typer.defaultProps = {
  text: "Build apps, libraries, frameworks, plug-ins, and other executable code that run natively on Apple silicon. When you build executables on top of Apple frameworks and technologies, the only significant step you might need to take is to recompile your code for the arm64 architecture. If you rely on hardware-specific details or make assumptions about low-level features, modify your code as needed to support Apple silicon.",
}

export default Typer;
