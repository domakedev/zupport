import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import store from './store';
// import "./mocks";

// Traer AuthProvider
import { AuthProvider } from './context/Auth/AuthContext';

// Router
import Router from './router/Router';

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);
