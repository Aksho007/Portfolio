import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Happy people plan actions, they don't plan results.
        <br></br><br></br>

        Hello Everyone,<br></br><br></br>

        I am second year CSE undergraduate from Jaypee University of Information Technology, Solan, exploring various tech domains.<br></br>

        Being an aspiring web developer, I have done HTML, CSS, JavaScript, Fetching API, React.js, Node.js.<br></br>
        And now I am learning MERN stack development
         <br></br><br></br>

        Looking forward to learn new things...
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;