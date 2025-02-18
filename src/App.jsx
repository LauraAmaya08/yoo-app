import {Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home/Home'
import { CrearPost } from './pages/CrearPost'
import { Followers } from './pages/Followers'
import { Followes } from './pages/Follows'
import './index.css';


function App(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registrar" element={<Register/>}/>
      <Route path="/inicio/*" element={<Home/>}></Route>
      <Route path="/crear" element={<CrearPost/>}></Route>
      <Route path="/seguidores" element={<Followers/>}></Route>
      <Route path="/seguidos" element={<Followes/>}></Route>
    </Routes>
  )
}

export default App