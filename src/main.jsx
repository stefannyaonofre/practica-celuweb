import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router />
    </Provider>,
)
