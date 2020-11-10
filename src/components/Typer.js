import { Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import Char from './Char.js';
import Stats from './Stats.js';
//import { propTypes } from 'react-bootstrap/esm/Image';


class Typer extends Component {

  constructor(props) {
    super(props);
    let state = {
      text: this.props.text,
      input: "",
      startTime: 0,
      timerStarted: false
    };
    if (this.props.match) {
      switch (this.props.match.params.mode) {
        case 'short':
          state.text = "Mouse pads can also help improve the tracking of your mouse, as the textured surfaces give your mouse's sensor something tailor-made for it to see sliding by, ensuring you get all the performance your mouse is supposed to deliver. "
          break;
        case 'medium':
          state.text = "You should already know how important it is in gaming to have a great gaming mouse. But, where getting a great mouse and getting a subpar one can come down to a large difference in price, the same so with many gaming mouse pads. Not only is it worthwhile to pick up a quality mouse pad, but you have virtually no excuse. Most great mousepads don't cost all that much, and they'll be a huge step up over the budget barrel options you might find in an actual barrel at your local electronics store. A good gaming mouse pad can actually do more for you than you might think."
          break;
        case 'long':
          state.text = "Forget about mouse pads that just cover a portion of your desk, the SteelSeries QcK Prism Cloth 5XL is here to take over the entirely of your tabletop. At over 60 inches wide and over 30 inches deep, this mouse pad will cover up even some of the biggest gaming desks and standing desks. The QcK Prism Cloth 5XL is made of a thick, micro-woven cloth for a smooth-gliding surface with a fine texture that helps your mouse track accurately. Meanwhile, the underside has a rubberized surface to keep it firmly in place on your desk. That's only half the fun, though, as all models of the QcK Prism Cloth also feature an RGB light strip around the perimeter of the mouse pad. That light strip has two-zone lighting and supports the SteelSeries engine, so you can have it sync up with your other SteelSeries devices, flash with music, or even offer visual cues from your games."
          break;
      }
    }
    this.state = state;
  }

  resetState = () => {
    this.setState({
      text: this.props.text,
      input: "",
      startTime: 0,
      timerStarted: false
    });
    document.getElementById("inputBox").value = '';
  }

  handleChange = (event) => {
    if (event.target.value) {
      if (this.state.timerStarted) {
        this.setState({ input: event.target.value });
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
            <div id="text-box">
              <input
                id="inputBox"
                autoFocus="autoFocus"
                className="input-hidden"
                onChange={this.handleChange}
              />
              {charblock}
            </div>
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
  text: "Build apps, libraries, frameworks, plug-ins, and other executable code that run natively on Apple silicon. When you build executables on top of Apple frameworks and technologies, the only significant step you might need to take is to recompile your code for the arm64 architecture. If you rely on hardware-specific details or make assumptions about low-level features, modify your code as needed to support Apple silicon. Build apps, libraries, frameworks, plug-ins, and other executable code that run natively on Apple silicon. When you build executables on top of Apple frameworks and technologies, the only significant step you might need to take is to recompile your code for the arm64 architecture. If you rely on hardware-specific details or make assumptions about low-level features, modify your code as needed to support Apple silicon."
}

Typer.propTypes = {
  match: PropTypes.object
}


export default Typer;
