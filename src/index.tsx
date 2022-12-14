import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/global.css';
// eslint-disable-next-line import/no-unresolved
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
