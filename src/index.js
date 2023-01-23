import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ContextProvider from './Store/ContextProvider';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
