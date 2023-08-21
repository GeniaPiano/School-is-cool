import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './views/Root/Root';
import { worker } from 'mocks/browser';
import { AppProviders } from './providers/AppProviders';

worker.start(); // do rozpoczęcia mock servise worker


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProviders>
     <Root/>
    </AppProviders>
  </React.StrictMode>
);



//https://www.youtube.com/watch?v=GIp5_2IrDOI
//17