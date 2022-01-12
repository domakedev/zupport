import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
// import "./mocks";

// Traer AuthProvider
import { AuthProvider } from './context/Auth/AuthContext';

// Router
import Router from './router/Router';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);
