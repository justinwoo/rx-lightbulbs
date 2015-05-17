import React from 'react';
import Rx from 'rx';

import AppStream from './models/app-model';

import Root from './views/root';

var subscription;

AppStream.subscribe(function (newStream) {
  if (subscription && subscription.dispose) {
    subscription.dispose();
  }

  subscription = newStream.subscribe(function (data) {
    var {
      counter,
      operation,
      sequences,
      result
    } = data;

    React.render(
      <Root
        counter={counter}
        operation={operation}
        sequences={sequences}
        result={result}/>,
      document.getElementById('app')
    );
  });
});
