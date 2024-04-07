import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IoChevronBackSharp } from "react-icons/io5";
const image =
  "https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=740&t=st=1712053707~exp=1712054307~hmac=c5cb43e485ebcc2f9ed21d6a2dc2e5e75c559eaa05e65a38753a113da3859e40";
const Testimonial = () => {
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
          <div className=" md:w-4/12  flex justify-center items-center flex-col">
            <h1 className=" md:text-2xl text-xl font-bold mb-3 text-yellow-600">
              ★★★★★
            </h1>
            <p className=" md:text-lg px-4 text-center text-sm font-semibold text-gray-500 ">
              "Working with Aeonaxy has been an exceptional experience. Their
              team's expertise in software development ensured our project's
              success, delivering high-quality solutions that exceeded our
              expectations. Their dedication to innovation and client
              satisfaction truly sets them apart in the industry."
            </p>
            <p className=" mt-3 text-xl text-gray-700 font-semibold">-Varun</p>
          </div>
        </div>
        <div>
          <Link to="/loading">
            <button
              className={`px-4 mb-4 py-2 md:px-8 md:text-lg     
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

export default Testimonial;
