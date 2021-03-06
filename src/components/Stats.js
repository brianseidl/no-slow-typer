import React, { Component } from "react";
import PropTypes from "prop-types";

class Stats extends Component {
  /**
   * React component constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      correctCount: this.props.correctCount,
      incorrectCount: this.props.incorrectCount,
      startTime: this.props.startTime,
      currTime: Date.now(),
      isStopped: this.props.isStopped,
    };
  }

  /**
   * componentDidMount is a built in React function that is executed
   *   when the component is mounted.
   */
  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (!this.state.isStopped) {
        this.setState({ currTime: Date.now() });
      }
    }, 100);
  }

  /**
   * componentWillUnmount is a built in React function that is executed
   *   when the component is unmounted
   */
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  /**
   * getDerivedStateFromProps is a function used by the react framework.
   * Determines when to update the state given the props and prev state.
   * @param {object} nextProps
   * @param {object} prevState
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return nextProps;
    }
    return null;
  }

  /**
   * React render function.
   *
   * Preconditions:
   *   - Status of the component is updated.
   * Postconditions:
   *   - Component is rendered on page with latest data.
   */
  render() {
    // correct and inorrect chars used to calculate wpm
    let timePassed = this.state.currTime - this.state.startTime;
    let wpm = Math.floor(
      ((this.state.correctCount + this.state.incorrectCount) * 60) /
        ((5 * timePassed) / 1000)
    );

    return (
      <div data-testid="stats-div">
        <table id="stats-table" className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th id="stats-key" scope="col">
                Stat
              </th>
              <th id="stats-value" scope="col">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Time</th>
              <td data-testid="time">{timePassed / 1000}s</td>
            </tr>
            <tr>
              <th scope="row">Correct count</th>
              <td data-testid="correct-count">{this.state.correctCount}</td>
            </tr>
            <tr>
              <th scope="row">Incorrect count</th>
              <td data-testid="incorrect-count">{this.state.incorrectCount}</td>
            </tr>
            <tr>
              <th scope="row">Words per Minute</th>
              <td data-testid="wpm">{wpm}</td>
            </tr>
            <tr>
              <th scope="row">Error Percentage</th>
              <td data-testid="error-percentage">
                {(
                  (100 * this.state.incorrectCount) /
                  (this.state.incorrectCount + this.state.correctCount)
                ).toFixed(2)}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Stats.propTypes = {
  correctCount: PropTypes.number.isRequired,
  incorrectCount: PropTypes.number.isRequired,
  startTime: PropTypes.number.isRequired,
  isStopped: PropTypes.bool,
};

export default Stats;
