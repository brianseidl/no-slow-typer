import {Container} from 'react-bootstrap';

import React, {Component} from 'react';
import Char from './Char.js';


class Typer extends Component {

  constructor(props){
    super(props);

    this.state = {
      //index: 0,
      text: this.props.text,
      wrong: [],
      input: ""
    };
  }

  handleChange = (event) => {
    this.setState({input: event.target.value});
  }

  getFocus = () => {
    var inputBox = document.getElementById("inputBox");
    inputBox.focus();
  }

  render() {
    let textChars = this.state.text.split('');
    let inputChars = this.state.input.split('');

    const charblock = textChars.map((c, i) => {
      let isActive = false; 
      if (i === inputChars.length) {
        isActive = true;
      }
      return (<Char key={i} isActive={isActive} expected={c} input={inputChars[i]} />);
    });

    return (
        <Container onClick={this.getFocus} className="border border-dark rounded mt-5 px-4 py-2">
          {charblock}
          <input
            id="inputBox"
            autoFocus="autoFocus"
            className="input-hidden"
            onChange={this.handleChange}
          />
        </Container>
    );
  }
};

Typer.defaultProps = {
  text: "Build apps, libraries, frameworks, plug-ins, and other executable code that run natively on Apple silicon. When you build executables on top of Apple frameworks and technologies, the only significant step you might need to take is to recompile your code for the arm64 architecture. If you rely on hardware-specific details or make assumptions about low-level features, modify your code as needed to support Apple silicon.",
}

export default Typer;
