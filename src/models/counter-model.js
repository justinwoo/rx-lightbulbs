import Rx from 'rx';

var CounterStream = new Rx.Subject();

var counter = 0;

Rx.Scheduler.default.schedulePeriodic(
  500,
  function () {
    counter = (counter + 20) % 120;
    CounterStream.onNext(counter < 101 ? counter : 100);
  }
);

export default CounterStream;
