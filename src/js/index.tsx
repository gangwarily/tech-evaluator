import React from 'react';
import ReactDOM from 'react-dom';
import App, { SomeType } from './app/App';
import { hello } from './utils';

const type: SomeType = {
    foo: 'bar',
    bar: 425,
};

ReactDOM.render(<App aNumber={55} />, document.getElementById('app'));
