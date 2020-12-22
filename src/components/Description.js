import React from "react";

class Description extends React.Component {
  /**
   * React render function.
   *
   * Preconditions:
   *   - Status of the component is updated.
   * Postconditions:
   *   - Component is rendered on page with latest data.
   */
  render() {
    return (
      <div data-testid="description_txt" key="des" className="Mode-Description">
        {this.props.description}
      </div>
    );
  }
}

export default Description;
