import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
const Level = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [continueEnable, setContinueEnable] = useState(false);

  const handleBtn = (btn) => {
    setSelectedBtn(btn);
    setContinueEnable(true);
  };
  return (
    <div className="flex justify-center items-center text-center flex-col gap-8">
      <Link to="/info">
        <button className="absolute top-5 left-5">
          <IoChevronBackSharp className="text-2xl fixed text-blue-900" />
        </button>
      </Link>

      <div className="heading flex justify-center items-center mt-8 md:mt-24 flex-col">
        <h1 className="text-2xl font-bold mb-3">What is your comfort level?</h1>
        <p className="text-lg font-semibold text-gray-500 ml-2 ">
          Choose the highest level you feel confident in- you can always adjust
          later
        </p>
      </div>
      <div className="flex   flex-col md:flex-row gap-2  md:mt-6  ">
        <button
          onClick={() => handleBtn(1)}
          className={`${
            selectedBtn === 1 ? "border-2 border-green-700 " : "bg-white"
          }     w-full md:px-20 md:py-10  shadow-[0_3px_6px_rgb(0,0,0,0.2)]    text-black pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 1}
        >
          <div className="flex ml-10 md:ml-0 gap-6 flex-col  justify-center items-center text-center     ">
            <h4 className=" md:text-2xl text-lg text-gray-700 text-center  ">
              UI/UX
            </h4>
            <div className="md:text-lg text-sm">
              <p className="text-black font-bold">Beginner</p>
              <p className="text-gray-500 font-semibold">webpages </p>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleBtn(2)}
          className={`${
            selectedBtn === 2 ? "border-2 border-green-700 " : "bg-white"
          }  w-full   text-center shadow-[0_3px_6px_rgb(0,0,0,0.2)]    text-black pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 2}
        >
          <div className=" ml-10  gap-6 flex flex-col  justify-center items-center text-center     ">
            <h4 className="text-lg md:text-2xl text-gray-700 text-center  ">
              FRONTEND
            </h4>
            <div className=" md:text-lg text-sm">
              <p className="text-black font-bold"> Intermediate</p>
              <p className="text-gray-500 font-semibold"> React</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleBtn(3)}
          className={`${
            selectedBtn === 3 ? "border-2 border-green-700 " : "bg-white"
          }  w-full   shadow-[0_3px_6px_rgb(0,0,0,0.2)]    text-black pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 3}
        >
          <div className=" gap-6 ml-10 flex flex-col  justify-center items-center text-center     ">
            <h4 className="text-lg md:text-2xl text-gray-700 text-center ">
              BACKEND
            </h4>
            <div className="  text-sm md:text-lg">
              <p className="text-black font-bold">Intermediate</p>
              <p className="text-gray-500 font-semibold">JavaScript(Nodejs)</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleBtn(4)}
          className={`${
            selectedBtn === 4 ? "border-2 border-green-700  " : "bg-white"
          }  w-full   shadow-[0_3px_6px_rgb(0,0,0,0.2)]    text-black pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 4}
        >
          <div
            className="
               
             ml-10 gap-6 flex flex-col  justify-center items-center text-center     "
          >
            <h4
              className="               
              text-lg md:text-2xl text-gray-700 text-center  "
            >
              MERN
            </h4>
            <div className="  text-sm md:text-lg">
              <p className="text-black font-bold">Advanced</p>
              <p className="text-gray-500 font-semibold"> Nextjs</p>
            </div>
          </div>
        </button>
      </div>
      <div className="mt-8">
        {continueEnable ? (
          <Link to="/testimonial">
            <button
              className={`px-6 py-2 md:px-12 md:text-lg rounded-xl     
          text-white  bg-black mb-4 `}
            >
              Continue
            </button>
          </Link>
        ) : (
          <button
            className={`px-6 py-2 md:px-12 md:text-lg mb-4 bg-gray-500 text-white
             rounded-xl`}
            disabled={!continueEnable}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Level;
