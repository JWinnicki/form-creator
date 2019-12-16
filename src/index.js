import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './index.scss';
import App from './containers/App/App';

const app = (
    <HashRouter>
        <App />
    </HashRouter>
);

ReactDOM.render(app, document.getElementById('root'));
