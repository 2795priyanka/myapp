import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
