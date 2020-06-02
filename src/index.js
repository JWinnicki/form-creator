import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './index.scss';
import App from './containers/App/App';
import FormContextProvider from './context/form-context';
import ModalContextProvider from './context/modal-context';


const app = (
    <HashRouter>
        <FormContextProvider>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </FormContextProvider>
    </HashRouter>
);

ReactDOM.render(app, document.getElementById('root'));
