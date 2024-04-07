import { React, useState, useEffect } from "react";

import Info from "./Info";
import Recommendations from "./Recommendations";
const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen flex flex-col bg-black  items-center justify-center">
      {loading ? (
        <div className="flex gap-6 flex-col text-center justify-center items-center">
          <img
            class="w-20 h-20 animate-spin-slow "
            src="https://www.svgrepo.com/show/70469/loading.svg"
            alt="Loading icon"
          />
          <p className="text-xl text-white w-6/12">
            Finding learning path recommendations for you based on your reponses
          </p>
        </div>
      ) : (
        <div className=" w-full    h-screen bg-white    ">
          {<Recommendations />}
        </div>
      )}
    </div>
  );
};

export default Loading;
