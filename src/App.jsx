import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personal from "./components/Personal";
import Interested from "./components/Interested";
import Info from "./components/Info";
import Level from "./components/Level";
import Testimonial from "./components/Testimonial";
import Loading from "./components/Loading";
import Recommendations from "./components/Recommendations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/interested" element={<Interested />} />
        <Route path="/info" element={<Info />} />
        <Route path="/level" element={<Level />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
