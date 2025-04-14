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
import HTMLImages from "./components/Topics/HTMLImages";
import HTMLFavicon from "./components/Topics/HTMLFavicon";
import HTMLTable from "./components/Topics/HTMLTable";
import HTMLList from "./components/Topics/HTMLList";
import HTMLOrderedList from "./components/Topics/HTMLOrderedList";
import HTMLUnorderedList from "./components/Topics/HTMLUnorderedList";
import HTMLDescriptionList from "./components/Topics/HTMLDescriptionList";
import HTMLInlineBlock from "./components/Topics/HTMLInlineBlock";
import HTMLIframes from "./components/Topics/HTMLIframes";
import HTMLFilePath from "./components/Topics/HTMLFilePath";
import HTMLLayout from "./components/Topics/HTMLLayout";
import HTMLCodeElements from "./components/Topics/HTMLCodeElements";
import HTMLSemantic from "./components/Topics/HTMLSemantic";
import HTMLHyperlinks from "./components/Topics/HTMLHyperlinks";
import HTMLA_Z_List from "./components/Topics/HTMlTutorialReference/HTMLA_Z_List";
import HTMLGraphics from "./components/Topics/HTMLGraphics";
import HTMLCompleteAttribute from "./components/Topics/HTMlTutorialReference/HTMLCompleteAttribute";
import HTMLGlobalAttribute from "./components/Topics/HTMlTutorialReference/HTMLGlobalAttribute";
import HTMLComplete from "./components/Topics/HTMlTutorialReference/HTMLComplete";
import HTMLEntities from "./components/Topics/HTMLEntities";
import HTMLSymbols from "./components/Topics/HTMLSymbols";
import HTMLEmojis from "./components/Topics/HTMLEmojis";
import HTMLCharsets from "./components/Topics/HTMLCharsets";
import HTMLUrlEncoding from "./components/Topics/HTMLUrlEncoding";
import HTMLForms from "./components/Topics/HTMLForms";
import HTMLResponsiveWebDesign from "./components/Topics/HTMLResponsiveWebDesign";
import HTMLVideo from "./components/Topics/HTMLVideo";
import HTMLExamples from "./components/Topics/HTMLExamples";

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
          
          <Route path="/html-links" element={<HTMLHyperlinks />} />
          <Route path="/html-images" element={<HTMLImages />} />
          <Route path="/html-favicon" element={<HTMLFavicon />} />
          <Route path="/html-tables" element={<HTMLTable />} />
          <Route path="/html-lists" element={<HTMLList />} />
          <Route path="/html-ordered-lists" element={<HTMLOrderedList />} />
          <Route path="/html-unordered-lists" element={<HTMLUnorderedList />} />
          <Route path="/html-description-lists" element={<HTMLDescriptionList />} />
          <Route path="/html-block-inline" element={<HTMLInlineBlock />} />
          <Route path="/html-iframes" element={<HTMLIframes />} />
          <Route path="/html-file-paths" element={<HTMLFilePath />} />
          <Route path="/html-layout" element={<HTMLLayout />} />
          <Route path="/html-computer-code" element={<HTMLCodeElements />} />
          <Route path="/html5-semantics" element={<HTMLSemantic />} />
          <Route path="/html-graphics" element={<HTMLGraphics />} />
          <Route path="/html-tags-a-to-z-list" element={<HTMLA_Z_List />} />
          <Route path="/html-attributes-complete-reference" element={<HTMLCompleteAttribute />} />
          <Route path="/html-global-attributes" element={<HTMLGlobalAttribute />} />
          <Route path="/html5-complete-reference" element={<HTMLComplete />} />
          <Route path="/html-entities" element={<HTMLEntities />} />
          <Route path="/html-symbols" element={<HTMLSymbols />} />
          <Route path="/html-emojis" element={<HTMLEmojis />} />
          <Route path="/html-charsets" element={<HTMLCharsets />} />
          <Route path="/html-url-encoding" element={<HTMLUrlEncoding />} />
          <Route path="/html-forms" element={<HTMLForms />} />
          <Route path="/html-responsive-design" element={<HTMLResponsiveWebDesign />} />
          <Route path="/html-video" element={<HTMLVideo />} />
          <Route path="/html-examples" element={<HTMLExamples />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
