import React from 'react';

export class Description extends React.Component {
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
      <div role="description_txt" key="des" className="Mode-Description">
        {this.props.description}
      </div>
    );
   }
}
