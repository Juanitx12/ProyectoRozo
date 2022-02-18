import React from 'react'
import { Header } from '../Layouts/Header/Header'
import { Foter } from '../Layouts/Foter/Foter'
import {MainContador} from '../Layouts/MainContador/MainContador'


export const Contador = () => {
    
  return (
    <div className='contador'>
        <Header/>
        <MainContador/>
        <Foter/>
    </div>
  )
}
