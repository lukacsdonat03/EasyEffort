import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Authentication } from './context/AuthContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import ExcercisesPage from './pages/ExcercisesPage.js';
import BMIPage from './pages/BMIPage.js';
import CalorieCounter from './pages/CalorieCounter.jsx';
import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },
  {
    path: "/AboutPage",
    element: <AboutPage/>,
  },
  {
    path: "/ContactPage",
    element: <ContactPage/>,
  },
  {
    path: "/BMIPage",
    element: <BMIPage/>,
  },
  {
    path: "/CalorieCounterPage",
    element: <CalorieCounter/>,
  },
  {
    path: "/ExcercisesPage",
    element: <ExcercisesPage/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authentication>
    <RouterProvider router={router} />
    </Authentication>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
