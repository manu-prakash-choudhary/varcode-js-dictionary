import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homesection from "./components/Sahil/Homesection";
import { useState } from "react";
import Navbar from "./components/Bhanu/Bhanu";
import Layout from "./components/Layout";
import HTMLIntroduction from "./components/Topics/HTMLIntroduction";
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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
