/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/scrollbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css'
import './css/fontawesomeall.css';
import './css/chat.css';
import 'bootstrap';

import './js/chat.js';



import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
