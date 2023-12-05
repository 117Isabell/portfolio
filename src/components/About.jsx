import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Please take a look around.</p>
          </div>
          <div>
            <p className="text-2xl">
              My fervor for web development drives me to swiftly acquire new
              skills, ensuring I stay at the forefront of innovation. With a
              dual perspective as a developer and user advocate, I excel at
              producing great products. Notably, my collaborative nature
              enhances team synergy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
