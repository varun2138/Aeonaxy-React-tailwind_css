import React from "react";

const image1 =
  " https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1712077121~exp=1712077721~hmac=d99ef96136e4f8c1fb18ef6a3aec3b8e7b37657533a7dfd8c460c1e742fe7cff";

const image2 =
  "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg?w=740&t=st=1712077183~exp=1712077783~hmac=846b98e5384dcf311369b80951d50027d2f45a33a40363978c401074a78cd1b8";
const Recommendations = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6">
      <div className="heading flex justify-center items-center mt-20 md:mt-36 flex-col    ">
        <h1 className="text-xl font-bold mb-3 md:text-2xl  px-1  ">
          Learning paths based on your answers
        </h1>
        <p className="w-10/12 text-lg font-semibold text-gray-500 md:text-lg ">
          Choose one to get started.
        </p>
      </div>
      <div className="flex    flex-col md:flex-row w-full justify-center items-center md:w-6/12 gap-4 mb-6   ">
        <div className="container shadow-[0_3px_10px_rgb(0,0,0,0.2)]   relative   w-10/12 md:w-6/12 flex flex-col md:flex-row justify-center items-center border-2 border-green-100 px-2 pb-3  pt-12 gap-3 rounded-md">
          <div className="  absolute left-0 top-3  text-white font-bold px-2 py-1 rounded-r-xl bg-yellow-600 ">
            popular
          </div>
          <p className="font-semibold  text-gray-500">
            <b className="mr-2 text-lg text-black ">Full Stack</b>Learning
            full-stack development equips you with the skills to build both
            frontend and backend components, making you a versatile and
            sought-after developer in the industry
          </p>
          <img src={image1} alt="" className="w-5/12" />
        </div>
        <div className="container shadow-[0_3px_10px_rgb(0,0,0,0.2)]  w-10/12 md:w-6/12 flex flex-col md:flex-row justify-center items-center border-2 border-blue-100 px-3 py-4  gap-3 rounded-md">
          <p className="font-semibold text-gray-600">
            <b className="mr-2 text-lg ">Java(SpringBoot)</b>
            Java Spring Boot offers a streamlined framework for building
            scalable web applications .
          </p>
          <img src={image2} alt="" className="w-5/12" />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
