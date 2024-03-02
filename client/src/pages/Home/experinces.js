import React, { useState } from 'react';
import SectionTitle from '../../components/sectionTitle';
import { experiences } from '../../resources/experiences';

const Experiences = () => {
    const [selectedItemIndex, setSelectedItemIndex] =useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c87] w-[110%] sm:flex-row sm:overflow-scroll sm:w-full'>
        {experiences.map((experience, index) => (
            <div onClick={()=>{
                setSelectedItemIndex(index);
            }} className='cursor-pointer'>
              <h1 className={`text-xl px-10 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40" : "text-white"}`}>
                {experience.period}
              </h1>
              {/* Add other fields you want to display */}
            </div>

          ))}
        </div>
        <div>

        </div>
      <div className='flex flex-col gap-10'>
        <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].title}</h1>
        <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].company}</h1>
        <p className='text-white'>{experiences[selectedItemIndex].description}</p>
      </div>
      </div>
    </div>
  );
}

export default Experiences;
