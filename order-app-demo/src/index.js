import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.less"
import AppRouter from './router'
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);