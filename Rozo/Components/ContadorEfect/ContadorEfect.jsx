import React from 'react'
import { Foter } from '../Layouts/Foter/Foter'
import { Header } from '../Layouts/Header/Header'
import {MainContadorEfect} from '../Layouts/MainContadorEfect/MainContadorEfect'



export const ContadorEfect = () => {
  
  return (
    <div className='contadorEfect'>
        <Header/>
        <MainContadorEfect/>
        <Foter/>
    </div>
  )
}
