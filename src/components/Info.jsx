import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

const image =
  "https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-3802.jpg?w=740&t=st=1711979104~exp=1711979704~hmac=f5143ba516555902848d60eaf585712286408d2e99bea99c69318d4e3d4071da";

const Info = () => {
  return (
    <div>
      <Link to="/interested">
        <button className="absolute top-4 left-4">
          <IoChevronBackSharp className="text-2xl fixed text-blue-900" />
        </button>
      </Link>

      <div className="flex flex-col justify-center items-center gap-12">
        <div className=" md:mt-20 text-center flex flex-col md:flex-row justify-center items-center mt-24 gap-12">
          <img
            className="w-8/12 md:w-3/12 md:mt-8   rounded-lg"
            src={image}
            alt=""
          />
          <div className=" md:w-6/12 w-9/12  flex justify-center items-center flex-col">
            <h1 className=" md:text-2xl text-xl font-bold mb-3">
              You're in the right place
            </h1>
            <p className="  md:text-lg px-4 text-center text-sm font-semibold text-gray-500 ">
              There are no limits to what we can do with technology. We,
              Aeonaxy, are working on such use cases, which will transform the
              whole education system and the current learning methods. Our every
              product is somehow pointing towards our goal.
            </p>
          </div>
        </div>
        <div>
          <Link to="/level">
            <button
              className={`px-4 py-2 md:px-8 md:text-lg     
          text-white rounded-xl bg-black `}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
