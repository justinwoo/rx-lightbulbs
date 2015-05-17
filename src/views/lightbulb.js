import React from 'react';

class Lightbulb extends React.Component {

  render() {
    var className = this.props.isActive ? 'lightbulb active' : 'lightbulb';
    return (
      <div className={className} ref="container" style={{left: this.props.value + '%'}}>
        <p>{this.props.label}</p>
      </div>
    );
  }

}

export default Lightbulb;
