import React from 'react';
import ReactDOM from 'react-dom/client';
import {StyleGlobal} from './globalStyle'
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleGlobal/>
    <App />
  </React.StrictMode>
);
