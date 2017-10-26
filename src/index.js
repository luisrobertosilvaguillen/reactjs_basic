//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {Route} from 'react-router-dom';

//Routes
import AppRoutes from './routes';
// import registerServiceWorker from './registerServiceWorker';

//Assets
import './components/Global/css/index.css';


ReactDOM.render(<AppRoutes />, document.getElementById('root'));

// registerServiceWorker();
