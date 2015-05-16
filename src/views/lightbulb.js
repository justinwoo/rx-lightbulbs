var React = require('react');

class Lightbulb extends React.Component {

  render() {
    var className = this.props.counter > this.props.value ? 'lightbulb active' : 'lightbulb';
    return (
      <div className={className} ref="container" style={{left: this.props.value + '%'}}>
        <p>{this.props.label}</p>
      </div>
    );
  }

}

module.exports = Lightbulb;
