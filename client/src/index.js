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
import CalorieCounter from './pages/CalorieCounter.jsx';
import Login from './pages/Login.jsx'
import {Register} from './pages/Register.jsx'
import { AdminPage } from './pages/admin/AdminPage';
import Wokrouts from './pages/Wokrouts';
import { NutritionalSupplements } from './pages/NutritionalSupplements';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/contacts",
    element: <ContactPage/>,
  },
  {
    path: "/workout",
    element: <Wokrouts/>,
  },
  {
    path: "/counter",
    element: <CalorieCounter/>,
  },
  {
    path: "/supplements",
    element: <NutritionalSupplements/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:'/admin',
    element:<AdminPage/>
  }
  
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
