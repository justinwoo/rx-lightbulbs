var React = require('react');

class Line extends React.Component {

  render() {
    return (
      <div className="line">
        <div className="marker"/>
        <div className="fill" style={{width: this.props.counter + '%'}}/>
        {this.props.children}
      </div>
    );
  }

}

module.exports = Line;
