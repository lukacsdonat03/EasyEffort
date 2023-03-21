import {Table}  from '@mui/material';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { Authentication } from './context/AuthContext';
import { CalorieCounter } from './pages/CalorieCounter';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';



function App() {
  return (
    <>
      <Authentication>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/counter' element={<CalorieCounter />} />
            <Route path='/test' element={<Table/>}/>
          </Routes>
        </BrowserRouter>
      </Authentication>
    </>  
    
  );
}

export default App;
