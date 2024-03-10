import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { useSelector } from 'react-redux'; //
const About = () => {
  // import { useSelector } from 'react-redux';
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {about} = portfolioData;
  const {description1, description2,lottieURL,skilles} = about;
  const skills = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Python",
    "Git",
    "FireBase",
  ];
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            {description1 || ''}
          </p>
          <p className="text-white">
            {description2 || ''}
          </p>
        </div>
      </div>
      <div className="py-5 ">
        <h1 className="text-tertiary text-xl my-5">
          {" "}
          Here are a few technologies I've been working with recently.
        </h1>
        <div className="flex flex-wrap gap-10">
          {skilles.map((skill, index) => (
            <div key={index} className="border rounded border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
