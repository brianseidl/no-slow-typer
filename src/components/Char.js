import React, {Component} from 'react';


class Char extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            value: null,
            isInputed: false,
            isCorrect: null,
            isNext: false,
        };
    }
    render() {
        return (
            <div className="typer-char">
                {this.props.value}
            </div>
        );
    }
};

export default Char;
