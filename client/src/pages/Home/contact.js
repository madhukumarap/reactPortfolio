import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { useSelector } from 'react-redux';

const Contact = () => {
  const {  portfolioData } = useSelector((state) => state.root);
  const  {contact} = portfolioData
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-tertiary text-sm ">{`{`}</p>
          { Object.keys(contact).map((key) => ( // Using contactDetails instead of contact
            <p key={key} className="ml-5 text-white">
              <span className="text-tertiary">"{key}" : </span>
              <span className="text-tertiary">"{contact[key]}"</span>
            </p>
          ))}
          <p className="text-white">{`}`}</p>
        </div>
        <div className="h-[400px] ">
          <dotlottie-player
            src="https://lottie.host/18dfe90a-9b3f-4f29-94eb-56bc81746826/egkwXFEBhr.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
