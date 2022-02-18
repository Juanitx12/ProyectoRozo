import React from 'react';
import { Header } from '../Layouts/Header/Header';
import { Main } from '../Layouts/Main/Main';
import { Foter } from '../Layouts/Foter/Foter';

export const Home = () => {
  return (
    <div class="home">
      <Header/>
      <Main/>
      <Foter/>
    </div>
  )
}
