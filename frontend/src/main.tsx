import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './components/Hello'

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Hello name="React" />
  </React.StrictMode>
);
