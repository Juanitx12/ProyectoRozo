import React from 'react'
import { Header } from '../Layouts/Header/Header'
import { Foter } from '../Layouts/Foter/Foter'
import { MainAboutUs } from '../Layouts/MainAboutUs/MainAboutUs'

export const AboutUs = () => {
  return (
      <div className='aboutUs'>
        <Header/>
        <MainAboutUs/>
        <Foter/>
      </div>
    
  )
}

