var React = require('react');

var Line = require('./line');
var Lightbulb = require('./lightbulb');

class Root extends React.Component {

  getLines(counter, sequences) {
    var lines = sequences.map((sequence, i) => {
       return this.getLine(counter, sequence, i);
    });
    return (
      <div classNames="lines">
        {lines}
      </div>
    )
  }

  getLine(counter, values, key) {
    var lightbulbs = values.map(function (value, i) {
      return (
        <Lightbulb key={i} value={value} counter={counter} label={value}/>
      );
    });

    return (
      <Line counter={this.props.counter} key={key}>
        {lightbulbs}
      </Line>
    );
  }

  render() {
    var counter = this.props.counter;
    return (
      <div className="root">
        {this.getLines(counter, this.props.sequences)}
        <h2 className="operation-name">{this.props.operation}</h2>
        {this.getLine(counter, this.props.result)}
      </div>
    );
  }
}

module.exports = Root;
