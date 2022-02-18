
import './App.css';
import { Home } from './Components/Home/Home'
import { AboutUs } from './Components/AboutUs/AboutUs'
import { Contacto } from './Components/Contacto/Contacto'
import { Contador } from './Components/Contador/Contador';
import {ContadorEfect} from './Components/ContadorEfect/ContadorEfect'
import {OnOff} from './Components/OnOff/OnOff'


import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/AboutUs' element = {<AboutUs/>}/>
        <Route path='/Contacto' element = {<Contacto/>}/>
        <Route path='/Contador' element = {<Contador/>}/>
        <Route path='/ContadorEfect' element = {<ContadorEfect/>}/>
        <Route path='/OnOff' element = {<OnOff/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
