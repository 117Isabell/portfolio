import React from "react";
import teachSite from "../assets/projects/teachSite.png";
import tictactoe from "../assets/projects/tictactoe.jpg";
// import { data } from "../data/data.js";

// const Work = () => {
//   // projects file
//   const project = data;
//   //setProject(data);

//   return (
//     <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
//             Work
//           </p>
//           <p className="py-6">Check out some of my recent work</p>
//         </div>

//         {/* container for projects */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {/* Gird Item */}
//           {project.map((item, index) => (
//             <div
//               key={index}
//               style={{ backgroundImage: `url(${item.image})` }}
//               className="shadow-lg shadow-[#040c16] group container rounded-md
//               flex justify-center text-center items-center mx-auto content-div "
//             >
//               {/* Hover effect for images */}
//               <div className="opacity-0 group-hover:opacity-100 ">
//                 <span className="text-2xl font bold text-white tracking-wider ">
//                   {item.name}
//                 </span>
//                 <div className="pt-8 text-center ">
//                   {/* eslint-disable-next-line */}
//                   <a href={item.github} target="_blank">
//                     <button
//                       className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//                     >
//                       Code
//                     </button>
//                   </a>
//                   {/* eslint-disable-next-line */}
//                   <a href={item.live} target="_blank">
//                     <button
//                       className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//                     >
//                       Live
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-400">
          Work
        </p>
        <p className="py-6 text-3xl">Check out some of my recent work</p>
      </div>

      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Grid item */}
        <div
          style={{ backgroundImage: `url(${teachSite})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/* Hover Effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://chinesewithisabell.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/117Isabell/learnchinesewithisabell"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${tictactoe})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/* Hover Effect */}
          <div className="opacity=0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              HTML, CSS JS Application
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/117Isabell/tic-tac-toe"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
