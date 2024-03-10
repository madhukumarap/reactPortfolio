import React, { useState } from 'react';
import SectionTitle from '../../components/sectionTitle';
import { useSelector } from 'react-redux';

const Education = () => {
   const { loading, portfolioData } = useSelector((state) => state.root);
   const { education: portfolioExperiences } = portfolioData || {}; // Rename experiences to avoid conflicts
   const [selectedItemIndex, setSelectedItemIndex] = useState(0);

   return (
      <div>
         <SectionTitle title="Experience" />
         <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c87] w-[110%] sm:flex-row sm:overflow-scroll sm:w-full'>
               {portfolioExperiences && portfolioExperiences.map((experience, index) => (
                  <div key={index} onClick={() => {
                     setSelectedItemIndex(index);
                  }} className='cursor-pointer'>
                     <h1 className={`text-xl px-10 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40" : "text-white"}`}>
                        {experience.year}
                     </h1>
                     {/* Add other fields you want to display */}
                  </div>
               ))}
            </div>
            <div>
               <div className='flex flex-col gap-10'>
                  {portfolioExperiences && portfolioExperiences[selectedItemIndex] &&
                     <>
                        <h1 className='text-secondary text-xl'>{portfolioExperiences[selectedItemIndex].title}</h1>
                        <h1 className='text-secondary text-xl'>{portfolioExperiences[selectedItemIndex].institution}</h1>
                        <p className='text-white'>{portfolioExperiences[selectedItemIndex].description}</p>
                     </>
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default Education;
