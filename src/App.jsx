import {Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home/Home'
import Main from './pages/Profile/Main'
import './index.css';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registrar" element={<Register/>}/>
      <Route path="/inicio/*" element={<Home/>}></Route>
    </Routes>
  )
}

export default App