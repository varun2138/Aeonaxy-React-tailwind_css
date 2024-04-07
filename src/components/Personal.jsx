import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PiStudentBold, PiChalkboardTeacherDuotone } from "react-icons/pi";
import { FcBusinessman } from "react-icons/fc";
import { RiParentFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
// import { MdOutlineMan3 } from "react-icons/md";

const Personal = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [continueEnable, setContinueEnable] = useState(false);

  const handleBtn = (btn) => {
    setSelectedBtn(btn);
    setContinueEnable(true);
  };

  return (
    <div className="flex justify-center items-center mt-8 flex-col gap-16   ">
      <div className="heading flex justify-center items-center mt-8 flex-col    ">
        <h1 className="text-xl font-bold mb-3 md:text-2xl  ">
          Which Describes you best?
        </h1>
        <p className="text-sm font-semibold text-gray-500 md:text-lg ">
          This will help us personalize your experience
        </p>
      </div>
      <div className=" flex flex-col flex-wrap    gap-4 mx-1">
        <button
          onClick={() => {
            handleBtn(1);
          }}
          className={`${
            selectedBtn === 1 ? "bg-black text-amber-50 " : "bg-white"
          }  w-full  flex text-gray-600 font-medium    items-center md:pr-80 md:pl-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]      pr-20 pl-4 py-3 rounded-lg   `}
          disabled={selectedBtn === 1}
        >
          <PiStudentBold className="mr-2 text-2xl text-blue-600 " />
          <b
            className={`mr-1 text-black  italic  ${
              selectedBtn == 1 ? "text-amber-200" : "text-black"
            }`}
          >
            Student
          </b>
          or soon to be enrolled
        </button>
        <button
          onClick={() => {
            handleBtn(2);
          }}
          className={`${
            selectedBtn === 2 ? "bg-black text-amber-50" : "bg-white"
          }  w-full md:pr-80 md:pl-8 flex text-gray-600 font-medium   items-center    shadow-[0_3px_10px_rgb(0,0,0,0.2)]     pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 2}
        >
          <FcBusinessman className="mr-2 text-2xl text-blue-600 " />
          <b
            className={`mr-1 text-black  italic  ${
              selectedBtn == 2 ? "text-amber-200" : "text-black"
            }`}
          >
            Professional
          </b>
          pursuing a career
        </button>
        <button
          onClick={() => {
            handleBtn(3);
          }}
          className={`${
            selectedBtn === 3 ? "bg-black text-amber-100 " : "bg-white  "
          }  w-full md:pr-80 md:pl-8 flex text-gray-600 font-medium   items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]    pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 3}
        >
          <PiChalkboardTeacherDuotone className="mr-2 text-2xl text-pink-600 " />
          <b
            className={`mr-1 text-black  italic  ${
              selectedBtn == 3 ? "text-amber-200" : "text-black"
            }`}
          >
            Teacher
          </b>
        </button>
        <button
          onClick={() => {
            handleBtn(4);
          }}
          className={`${
            selectedBtn === 4 ? "bg-black text-amber-50" : "bg-white"
          }  w-full md:pr-80 md:pl-8 flex text-gray-600 font-medium   items-center   shadow-[0_3px_10px_rgb(0,0,0,0.2)]   pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 4}
        >
          <RiParentFill className="mr-2 text-2xl text-green-700 " />
          <b
            className={`mr-1 text-black  italic  ${
              selectedBtn == 4 ? "text-amber-200" : "text-black"
            }`}
          >
            Parent
          </b>{" "}
          of a school-age child
        </button>
        <button
          onClick={() => {
            handleBtn(5);
          }}
          className={`${
            selectedBtn === 5 ? "bg-black text-white " : "bg-white"
          }  w-full md:pr-80 md:pl-8 flex text-gray-600 font-medium   items-center   shadow-[0_3px_10px_rgb(0,0,0,0.2)]   pr-20 pl-4 py-3 rounded-lg  `}
          disabled={selectedBtn === 5}
        >
          <GrUserManager className="mr-2 text-2xl text-orange-600 " />
          <b
            className={`mr-1 text-black  italic  ${
              selectedBtn == 5 ? "text-amber-200" : "text-black"
            }`}
          >
            Lifelong learner
          </b>
        </button>
      </div>
      <div>
        {continueEnable ? (
          <Link to={`/interested `}>
            <button
              onClick={() => handleClick(1)}
              className={` mb-10 px-6 py-2 md:px-12 md:text-lg    
          text-white rounded-xl bg-black `}
            >
              Continue
            </button>
          </Link>
        ) : (
          <button
            className={`px-6 py-2 md:px-12 md:text-lg bg-gray-500 text-white rounded-xl`}
            disabled={!continueEnable}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Personal;
