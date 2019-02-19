import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import App, { SomeType } from './app/App';
import { hello } from './utils';

ReactModal.setAppElement('#app');

const type: SomeType = {
    foo: 'bar',
    bar: 425,
};

ReactDOM.render(<App aNumber={55} />, document.getElementById('app'));
