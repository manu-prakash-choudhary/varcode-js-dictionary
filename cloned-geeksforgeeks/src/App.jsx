import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homesection from "./components/Sahil/Homesection";
import { useState } from "react";
import Navbar from "./components/Bhanu/Bhanu";
import Layout from "./components/Layout";
import HTMLIntroduction from "./components/Topics/HTMLIntroduction";
import HTMLEditors from "./components/Topics/HTMLEditors";
import HTMLEntities from "./components/Topics/HTMLEntities";
import HTMLSymbols from "./components/Topics/HTMLSymbols";
import HTMLEmojis from "./components/Topics/HTMLEmojis";
import HTMLCharsets from "./components/Topics/HTMLCharsets";
import HTMLUrlEncoding from "./components/Topics/HTMLUrlEncoding";
import HTMLForms from "./components/Topics/HTMLForms";
import HTMLResponsiveWebDesign from "./components/Topics/HTMLResponsiveWebDesign";
import HTMLVideo from "./components/Topics/HTMLVideo";
import HTMLExamples from "./components/Topics/HTMLExamples";
import SVGAttributeCompleteReference from "./components/Topics/SVGAttributeCompleteReference";


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
          <Route path="/html-introduction" element={<HTMLIntroduction />} />
          <Route path="/html-editors" element={<HTMLEditors />} />
          <Route path="/html-entities" element={<HTMLEntities />} />
          <Route path="/html-symbols" element={<HTMLSymbols />} />
          <Route path="/html-emojis" element={<HTMLEmojis />} />
          <Route path="/html-charsets" element={<HTMLCharsets />} />
          <Route path="/html-url-encoding" element={<HTMLUrlEncoding />} />
          <Route path="/html-forms" element={<HTMLForms />} />
          <Route path="/html-responsive-design" element={<HTMLResponsiveWebDesign />} />
          <Route path="/html-video" element={<HTMLVideo />} />
          <Route path="/html-examples" element={<HTMLExamples />} />
          <Route path="/svg-attribute-complete-reference" element={<SVGAttributeCompleteReference />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
