
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/chat.css';
import './css/scrollbar.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.css';
// main css zaten bootstrap olduğu için bootstrapı normal kullandım.
import './css/main.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import App from './App';
import {UserProvider} from "./Context";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<UserProvider>
<App/>
</UserProvider>
,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();