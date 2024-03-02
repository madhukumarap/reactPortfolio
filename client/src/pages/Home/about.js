import React from "react";
import SectionTitle from "../../components/sectionTitle";
const about = () => {
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
            src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello My name is MadhuKumar A P. I enjoy creating things that live
            on the internet. My interest in web development started back in the
            2021 when i decided to try editing custom tumblr themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="text-white">
            Fast-Forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. here are a few technologies
            I've used React.js Node.js and Express.js and MongoDB I've been
            working with recently.
          </p>
        </div>
      </div>
      <div className="py-5 ">
        <h1 className="text-tertiary text-xl my-5">
          {" "}
          Here are a few technologies I've been working with recently.
        </h1>
        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="border rounded border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
