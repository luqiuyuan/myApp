import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './asset/font.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import * as models from './component/models';

const store = init({
    models,
})

ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
