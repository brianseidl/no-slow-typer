import React, {Component} from 'react';
import Char from './Char.js';


class Typer extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 0,
            text: "Build apps, libraries, frameworks, plug-ins, and other executable code that run natively on Apple silicon. When you build executables on top of Apple frameworks and technologies, the only significant step you might need to take is to recompile your code for the arm64 architecture. If you rely on hardware-specific details or make assumptions about low-level features, modify your code as needed to support Apple silicon.",
            wrong: []
        };
    }

    handleKeyPress = (event) => {
        // Read the keyboard input char
        let key = event.key;
        if (key === this.state.text[this.state.index]){
            this.setState({index: this.state.index + 1});
        } else {
            // is wrong
            this.setState(prevState => ({
                wrong: [prevState.wrong, this.state.index],
                index: this.state.index + 1
            }));
        }
    }

    handleKeyDown = (event) => {
        // Basically look for backspace
        let keyCode = event.keyCode;
        if (keyCode === 8 && this.state.index > 0) {
            this.setState({
                wrong: this.state.wrong.filter((_, i) => _ !== this.state.index - 1),
                index: this.state.index - 1
            });
        }
    }

    getFocus = () => {
        var inputBox = document.getElementById("inputBox");
        inputBox.focus();
    }

    render() {
        var chars = this.state.text.split('');
        const charblock = chars.map((c, i) => {
            let status = "notEntered";
            
            if (i === this.state.index) {
                status = "inFocus"
            } else if (i < this.state.index) {
                status = "correct"
            }
            
            if (this.state.wrong.includes(i)) {
                status = "incorrect"
            }
            
            return (
                <Char status={status} value={c} />
            );
        });

        return (
            <div>
                <div className="typer" onClick={this.getFocus}>
                    <div className="typer-board">
                        {charblock}
                    </div>
                    <input id="inputBox" autoFocus="autoFocus" className="input-hidden" onKeyPress={this.handleKeyPress} onKeyDown={this.handleKeyDown}></input>
                </div>
                <div>
                    <p>index: {this.state.index}</p>
                </div>
            </div>
        );
    }
};

export default Typer;
