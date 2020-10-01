import React, {Component} from 'react';
import Char from './Char.js';


class Typer extends Component {

    render() {
        var text = "Build apps, libraries, frameworks, plug-ins, and other executable code that run natively on Apple silicon. When you build executables on top of Apple frameworks and technologies, the only significant step you might need to take is to recompile your code for the arm64 architecture. If you rely on hardware-specific details or make assumptions about low-level features, modify your code as needed to support Apple silicon.";
        var chars = text.split('');
        const charblock = chars.map((c, i) => {
            return (
                <Char key={i} value={c} />
            );
        });
        var index = 0;

        function keydown(e) {
            var keycode = e.keyCode;
            // alert(keycode);
            if ((((keycode >= 65) && (keycode <= 90))
            || ((keycode >= 48) && (keycode <= 57))
            || ((keycode >= 186) && (keycode <= 222))) && (index >= -1)) {
                var i = 0;
                i = index;
                index++;
                alert(index);
                return (
                    <Char key={i} isFocus={true} isInputed={false} />
                );
            }
            else if ((keycode === 8) && (index >= -1)) {
                index--;
                alert(index);
            }
        }

        function getFocus() {
            var inputBox = document.getElementById("inputBox");
            inputBox.focus();
        }

        return (
            <div className="typer" onClick={getFocus}>
                <div className="typer-board">
                    {charblock}
                </div>
                <input id="inputBox" autoFocus="autoFocus" className="input-hidden" onKeyDown={keydown}></input>
            </div>
        );
    }
};

export default Typer;
