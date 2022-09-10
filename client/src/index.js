import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ResturentProvider } from './context/resturent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResturentProvider>
      <App />
    </ResturentProvider>
  </React.StrictMode>
);
