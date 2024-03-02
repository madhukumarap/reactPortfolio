import React from 'react'
import Header from "../../components/header"
import Intro from "./intro";
import About from "./about";
import Experinces from './experinces';
import Projects from './Projects';
import Contact from './contact';
import Footer from './footer';
import Sidebar from './sidebar';
const home = () => {
  return (
    <div >
      <Header/>
      <div className='bg-primary px-40 sm:px-5 '>
      <Intro/>
      <About/>
      <Experinces/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Sidebar/>
      </div>
    </div>
  )
}

export default home