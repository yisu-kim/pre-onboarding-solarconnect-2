import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root'),
);
