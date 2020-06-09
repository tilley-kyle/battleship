import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './stylesheet.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script src="node_modules/socket.io-client/dist/socket.io.js"></script>
        <script>
          var socket = io();
        </script>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
