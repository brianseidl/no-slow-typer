import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Char extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            status: this.props.status
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status !== this.state.status) {
            this.setState({status: nextProps.status});
        }
    }

    render() {
        let color;
        if (this.state.status === "inFocus") {
            color = "blue";
        } else if (this.state.status === "correct") {
            color = "green";
        } else if (this.state.status === "incorrect") {
            color = "red";
        } else if (this.state.status === "notEntered") {
            color = "black";
        }

        return (
            <div className="typer-char" style={{"color": color}}>
                {this.state.value}
            </div>
        );
    }
};

Char.propTypes = {
    value: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['inFocus', 'correct', 'incorrect', 'notEntered']).isRequired
};

export default Char;
