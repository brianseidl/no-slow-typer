import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expected: this.props.expected,
      input: this.props.input,
      isActive: this.props.isActive
    };
  }

  /**
  * TODO: This built in react function is soon to be depricated and should be replaced.
  *
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        input: nextProps.input,
        isActive: nextProps.isActive
      });
    }
  }*/

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.input !== prevState.input || nextProps.isActive !== prevState.isActive) {
      return ({
        input: nextProps.input,
        isActive: nextProps.isActive
      })
    }
    return null;
  }

  getClassNames() {
    let res = "typer-char ";

    if (this.state.isActive) {
      res += "letter-active";
    } else if (this.state.input) {
      if (this.state.input === this.state.expected) {
        res += "letter-correct";
      } else {
        res += "letter-incorrect";
      }
    } else {
      res += "letter-not-entered";
    }

    return res;
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {/*{this.state.input && this.state.input !== this.state.expected &&
          <e className="wrong-animation">
            {this.state.input}
          </e>
        */}
        {this.state.expected}
      </div>
    );
  }
};

Char.defaultProps = {
  input: null,
}

Char.propTypes = {
  isActive: PropTypes.bool,
  expected: PropTypes.string.isRequired,
  input: PropTypes.string
};

export default Char;
