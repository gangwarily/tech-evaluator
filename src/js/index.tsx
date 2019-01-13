import React from 'react';
import ReactDOM from 'react-dom';
import App, { SomeType } from './app/App';
import { hello } from './utils';

const type: SomeType = {
    foo: 'bar',
    bar: 425,
};

console.log(type.toString());
console.log(hello());

ReactDOM.render(<App />, document.getElementById('app'));
