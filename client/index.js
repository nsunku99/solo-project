import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink,
  createRoutesFromElements,
} from "react-router-dom";

// const router = createBrowserRoute(
//   createRoutesFromElements(

//   )
// )

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);