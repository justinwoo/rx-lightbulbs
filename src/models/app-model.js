import Rx from 'rx';

import MergeStream from './data/merge-model';
import CounterStream from './counter-model';

var AppStream = new Rx.ReplaySubject(1);

var SelectedStream = MergeStream;

var newStream = Rx.Observable.combineLatest(
  SelectedStream,
  CounterStream,
  function (merge, counter) {
    return {
      operation: merge.operation,
      sequences: merge.sequences,
      result: merge.result,
      counter
    };
  }
);

AppStream.onNext(newStream);

export default AppStream;
