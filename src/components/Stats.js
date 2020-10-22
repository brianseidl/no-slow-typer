import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Stats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      correctCount: this.props.correctCount,
      incorrectCount: this.props.incorrectCount,
      startTime: this.props.startTime
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return (nextProps)
    }
    return null;
  }

  render() {
    // correct and inorrect chars used to calculate wpm
    let timePassed = Date.now() - this.state.startTime;
    let wpm = Math.floor(((this.state.correctCount + this.state.incorrectCount) * 60) / (5 * timePassed / 1000));

    return (
      <div data-testid="stats-div">
        {/* This is horrible, should be a clock that should always be rendering but idgaf */}
        <p>Time: {timePassed / 1000}s</p>
        <p>Correct chars: {this.state.correctCount}</p>
        <p>IncorrectCount: {this.state.incorrectCount}</p>
        <p>Words per Minute: {wpm}</p>
        <p>Error Percentage: {(100 * this.state.incorrectCount / (this.state.incorrectCount + this.state.correctCount)).toFixed(2)}%</p>
      </div>
    );
  }
}

Stats.propTypes = {
  correctCount: PropTypes.number.isRequired,
  incorrectCount: PropTypes.number.isRequired,
  startTime: PropTypes.number.isRequired
};

export default Stats;
