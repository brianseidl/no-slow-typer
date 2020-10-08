import React from 'react';

export class Description extends React.Component {
    render() {
      return (
        <div key="des" className="Mode-Description">
          {this.props.description}
        </div>
      );
    }
  }