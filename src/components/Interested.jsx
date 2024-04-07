import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineStock } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";
import { SiMusicbrainz } from "react-icons/si";
import { FcSportsMode } from "react-icons/fc";
import { IoChevronBackSharp } from "react-icons/io5";
const Interested = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [continueEnable, setContinueEnable] = useState(false);

  const handleBtn = (btn) => {
    setSelectedBtn(btn);
    setContinueEnable(true);
  };

  return (
    <div className="flex justify-center items-center text-center flex-col gap-12">
      <Link to="/">
        <button className="absolute top-5 left-4">
          <IoChevronBackSharp className=" fixed text-2xl text-blue-900 " />
        </button>
      </Link>

      <div className="heading flex justify-center items-center mt-8 flex-col">
        <h1 className="text-2xl font-bold mb-3">
          Which are you most interseted in?
        </h1>
        <p className="text-lg font-semibold text-gray-500 ml-2 ">
          Choose just once.This will help us get you started( but won't limit
          your experience)
        </p>
      </div>
      <div className=" flex flex-col  flex-wrap gap-4 mx-2">
        <button
          onClick={() => {
            handleBtn(1);
          }}
          className={`${
            selectedBtn === 1 ? "bg-black text-amber-200 " : "bg-white"
          }  w-full md:pr-80 md:pl-8 flex   font-medium   items-center   shadow-[0_3px_10px_rgb(0,0,0,0.2)]      text-gray-700 pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 1}
        >
          <AiOutlineStock className="mr-3 text-2xl text-yellow-600 " />
          Learning specific skills to advance my career
        </button>
        <button
          onClick={() => {
            handleBtn(2);
          }}
          className={`${
            selectedBtn === 2 ? "bg-black text-amber-200" : "bg-white"
          }  w-full md:pr-80 md:pl-8 flex  font-medium   items-center   shadow-[0_3px_10px_rgb(0,0,0,0.2)]     text-gray-700 pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 2}
        >
          <FaGlobeAsia className="mr-3 text-2xl text-blue-400 " />
          Exploring new topics I'm interseted in
        </button>
        <button
          onClick={() => {
            handleBtn(3);
          }}
          className={`${
            selectedBtn === 3 ? "bg-black text-amber-200 " : "bg-white  "
          }  w-full md:pr-80 md:pl-8 flex  font-medium   items-center   shadow-[0_3px_10px_rgb(0,0,0,0.2)]    text-gray-700    pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 3}
        >
          <PiMathOperationsFill className="mr-3 text-2xl text-pink-600 " />
          Refreshing my math foundations
        </button>
        <button
          onClick={() => {
            handleBtn(4);
          }}
          className={`${
            selectedBtn === 4 ? "bg-black text-amber-200 " : "bg-white"
          }  w-full md:pr-80 md:pl-8    flex   font-medium   items-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)]      text-gray-700 pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 4}
        >
          <SiMusicbrainz className="mr-3 text-2xl text-purple-700 " />
          Exercising my brain to stay sharp
        </button>
        <button
          onClick={() => {
            handleBtn(5);
          }}
          className={`${
            selectedBtn === 5 ? "bg-black text-amber-200  " : "bg-white"
          }  w-full md:pr-80 md:pl-8    flex   font-medium   items-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)]     text-gray-700 pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 5}
        >
          <FcSportsMode className="mr-3 text-2xl text-green-700 " />
          Move your body, strengthen your mind.
        </button>
      </div>
      <div>
        {continueEnable ? (
          <Link to="/info">
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

export default Interested;
