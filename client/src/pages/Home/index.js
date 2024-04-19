import React from 'react';
import { useSelector } from 'react-redux'; // Corrected import statement

import Header from "../../components/header";
import Intro from "./intro";
import About from "./about";
import Experiences from './experinces'; // Corrected typo in import statement
import Projects from './Projects'; // Corrected typo in import statement
import Contact from './contact';
import Footer from './footer';
import Sidebar from './sidebar';
import Education from './Education';

const Home = () => { // Capitalized component name
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div >
      <Header />
      {portfolioData && (
        <div className='bg-primary px-40 sm:px-5 '>
          <Intro />
          <About />
          <Experiences /> 
          <Projects /> 
          <Education/>
          <Contact />
          <Footer />
          <Sidebar />
        </div>
      )}
      {/* <h1 className='px-32 py-32 font-bold font-mono bg-slate-400 '>Data is Loading....................</h1> */}
    </div>
  )
}

export default Home; // Capitalized export name
