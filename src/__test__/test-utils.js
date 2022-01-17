import React from 'react';
import { render } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from '../store';
// Import your own reducer
// import userReducer from '../userSlice';

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
const reduxRender = (ui, options) =>
  render(ui, { wrapper: ReduxProvider, ...options });
// function render(
//   ui,
//   {
//     preloadedState,
//     store = configureStore({ reducer: { user: userReducer }, preloadedState }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
// }

// re-export everything
export * from '@testing-library/react';
// override render method
export { reduxRender as render };
