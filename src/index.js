import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/AppRoutes"
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
