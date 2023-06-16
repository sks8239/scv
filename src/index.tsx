import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
    reducer: rootReducer
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
if (!root) throw new Error('Failed to find the root element');

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

reportWebVitals();
