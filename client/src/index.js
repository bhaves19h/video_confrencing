import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/authContext.jsx';
import {CookiesProvider} from 'react-cookie';
import { SocketContextProvider } from './context/SocketContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>

      <App />

      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
