import React from "react";
import SectionTitle from "../../components/sectionTitle";
const Contact = () => {
  const user = {
    name: "Madhukumar A P",
    age: 21,
    gender: "Male",
    email: "madhukumarap07@gmail.com",
    mobile: "8152974486",
    country: "India",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-tertiary text-sm ">{`{`}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5 text-white">
             
                <span className="text-tertiary">"{key}" : </span>
              <span className="text-tertiary">"{user[key]}"</span>
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
