var React = require('react');
var Rx = require('rx');

var Root = require('./views/root');


var seqA = [10, 40, 50, 80];
var seqB = [20, 45, 60, 90];

var result = [];

var sourceA = Rx.Observable.fromArray(seqA);
var sourceB = Rx.Observable.fromArray(seqB);

var operation = "merge";

Rx.Observable.merge(sourceA, sourceB).subscribe(function (value) {
  result.push(value);
});

var counter = 0;

var disposable = Rx.Scheduler.default.schedulePeriodic(
  10,
  function () {
    React.render(
      <Root
        counter={counter}
        operation={operation}
        sequences={[seqA, seqB]}
        result={result}/>,
      document.getElementById('app')
    );
    counter = (counter + 1) % 100;
  }
);
