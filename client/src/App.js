import{BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import TestList from './components/TestList';
import { Authentication } from './context/AuthContext';
import { CalorieCounter } from './pages/CalorieCounter';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';



function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/counter' element={<CalorieCounter />} />
            <Route path='/test' element={<TestList/>}/>
          </Routes>
        </BrowserRouter>
      </Authentication>
    </>  
    
  );
}

export default App;
