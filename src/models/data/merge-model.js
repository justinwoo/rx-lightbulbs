import Rx from 'rx';

var MergeStream = new Rx.ReplaySubject(1);

var seqA = [10, 40, 50, 80];
var seqB = [20, 45, 60, 90];

var result = [];

var sourceA = Rx.Observable.fromArray(seqA);
var sourceB = Rx.Observable.fromArray(seqB);

var operation = "merge";

Rx.Observable.merge(sourceA, sourceB).subscribe(function (value) {
  result.push(value);
}, function (err) {
  console.log('oops: ', err);
}, function () {
  MergeStream.onNext({
    operation: 'merge',
    sequences: [seqA, seqB],
    result: result
  });
});

export default MergeStream;
