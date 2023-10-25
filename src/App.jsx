import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {

  // <Aboutme /> instead of below since Aboutme will render the header(navigation) - the aboutme body - AND Footer: GitHub link - LinkedIn link 
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
