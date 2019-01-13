import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {hello} from "./utils";

console.log(hello());
ReactDOM.render(<App/>, document.getElementById('app'));