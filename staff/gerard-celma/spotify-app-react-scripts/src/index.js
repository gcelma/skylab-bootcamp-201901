import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/bootstrap/4.1.3/css/bootstrap.css'
import './index.css';
import spotifyApi from './vendor/spotify-api/1.0.0/spotify-api-1.0.0'
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';

spotifyApi.token = 'BQDgnygFk3LSyrroNS-KfPWoyfPzwDVc3lkdGVuccYr-tdIJhHSaGBBzs6ZYsGSgVVQ582uBUhuLQpJF_o_xMkroXztelWlFYiqt1nWcFYWnB1I_YG15mcXKY_QuVlnQxXc4rVE3m-OITqPYgIo'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
