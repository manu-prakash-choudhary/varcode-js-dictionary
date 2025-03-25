import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homesection from "./components/Sahil/Homesection";
import { useState } from "react";
import Navbar from "./components/Bhanu/Bhanu";
import Layout from "./components/Layout";
import HTMLTutorial from "./components/Topics/HTMLTutorial";
import HTMLIntroduction from "./components/Topics/HTMLIntroduction";
import HTMLEditors from "./components/Topics/HTMLEditors";
import HTMLComments from "./components/Topics/HTMLComments";
import HTMLBasics from "./components/Topics/HTMLBasics";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Introduction");
  return (
    // <Router>
    //   <div>
    //     <Yash />
    //     <div className="flex ">
    //       <Sidebar setSelectedTopic={setSelectedTopic} />
    //       <Homesection selectedTopic={selectedTopic} />
    //       {/* <Navbar /> */}
    //     </div>
    //   </div>
    //   {/* <Routes>
    //     <Route path="/bhanu" element={<Navbar />}></Route>
    //   </Routes> */}
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homesection />} />
          <Route path="/html-tutorial" element={<HTMLTutorial />} />
          <Route path="/html-introduction" element={<HTMLIntroduction />} />
          <Route path="/html-editors" element={<HTMLEditors />} />
          <Route path="/html-basics" element={<HTMLBasics />} />
          <Route path="/html-comments" element={<HTMLComments />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
