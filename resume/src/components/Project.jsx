import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title: "Food`Ingredient",
      href: "https://github.com/Aksho007/foodingredients",
    },
    {
      id: 2,
      src: reactParallax,
      title: "E Commerce",
      href: "https://github.com/Aksho007/Ecommerce",
    },
    {
      id: 3,
      src: navbar,
      title: "Snake Game",
      href: "https://github.com/Aksho007/Snakegame",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "Portfolio",
      href: "",
    },
    {
      id: 5,
      src: installNode,
      title: "Placement_Portal",
      href: "https://github.com/Aksho007/PlacementPortal",
    },
    {
      id: 6,
      src: reactWeather,
      title: "Qriosity",
      href: "https://github.com/ACM-JUIT/qriosityFrontend",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PROJECTS
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,title, href }) => (
            <div key={id}
            href={href} 
            className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="flex items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 mt-4 font-normal">{title}</p>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;