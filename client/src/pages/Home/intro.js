import React from 'react';
import { useSelector } from 'react-redux'; // Corrected import statement

const Intro = () => { // Capitalized component name
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {intro} = portfolioData; 
  const {firstName, lastName, welcometText, caption,description} = intro;
  return (
    <div className='h-[80vh] bg-primary flex flex-col  items-start justify-center gap-8 py-10 '>
       <h1 className='text-white'>{welcometText || ''}</h1>
       {firstName && lastName && (
         <h1 className='text-7xl text-secondary font-semibold sm:text-3xl'>
           {firstName} {lastName}
         </h1>
       )}       <h1 className='text-6xl text-white font-semibold sm:text-3xl'>{caption || ''}</h1>
       <p className='text-white w-2/3 sm:text-3xl'>{description || ''}</p>
       <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded cursor-pointer'>Get Started</button>
    </div>
  );
};

export default Intro; // Capitalized export name
