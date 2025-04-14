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
import HTMLElements from "./components/Topics/HTMLElements";
import HTMLAttributes from "./components/Topics/HTMLAttributes";
import HTMLHeadings from "./components/Topics/HTMLHeadings";
import HTMLParagraphs from "./components/Topics/HTMLParagraphs";
import HTMLTextFormatting from "./components/Topics/HTMLTextFormatting"
import HTMLQuotations from "./components/Topics/HTMLQuotations";
import HTMLColors from "./components/Topics/HTMLColors";
import HTMLMathML from "./components/Topics/HTMLTutorialReference/HTMLMathML";
import HTMLDomRef from "./components/Topics/HTMLTutorialReference/HTMLDomRef";
import HTMLAVRef from "./components/Topics/HTMLTutorialReference/HTMLAVRef";
import HTMLSvg1Ref from "./components/Topics/HTMLTutorialReference/HTMLSvg1Ref";
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
          <Route path="/html-elements" element={<HTMLElements />} />
          <Route path="/html-attributes" element={<HTMLAttributes />} />
          <Route path="/html-headings" element={<HTMLHeadings />} />
          <Route path="/html-paragraphs" element={<HTMLParagraphs />} />
          <Route path="/html-text-formatting" element={<HTMLTextFormatting />} />
          <Route path="/html-quotations" element={<HTMLQuotations />} />
          <Route path="/html-colors" element={<HTMLColors />} />
          <Route path="/html5-mathml-complete-reference" element={<HTMLMathML />} />
          <Route path="/html-dom-complete-reference" element={<HTMLDomRef />} />
          <Route path="/html-dom-audio-video-complete-reference" element={<HTMLAVRef />} />
          <Route path="/svg-element-complete-reference" element={<HTMLSvg1Ref />} />
          {/* Add more routes as needed */}
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
