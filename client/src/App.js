import{BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { CalorieCounter } from './pages/CalorieCounter';
import { Login } from './pages/Login';
import { Register } from './pages/Register';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/counter' element={<CalorieCounter />} />
        </Routes>
      </BrowserRouter>
    </>  
    
  );
}

export default App;
