import React from "react";
import { htmlTutorialNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLIntroduction = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Introduction</h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <div className="pl-0 mt-4">
        <p className="text-gray-800 text-justify">
          <strong>HTML</strong> stands for <b>HyperText Markup Language</b>. It
          is the standard language used to create and structure content on the
          web. It tells the web browser how to display text, links, images, and
          other forms of multimedia on a webpage. HTML sets up the basic
          structure of a website, and then CSS and JavaScript add style and
          interactivity to make it look and function better.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>HTML is a markup language, not a programming language, meaning it annotates text to define how it is structured and displayed by web browsers.</li>
          <li>It forms the building blocks of all websites and is complemented by CSS for style and JavaScript for interactivity.</li>
        </ul>
        <p className="mt-4 p-4 ">In a nutshell, HTML is all about <b>organizing and displaying information</b> on a webpage. We can think of it as the <b>bones</b> or <b>structure</b> of a webpage.</p>
      </div>
      <div className = "text-gray-800">
            <h3 className="text-2xl font-semibold text-red-600 mt-5 mb-5">
            Basic HTML Code Example
            </h3>
            
            <div className = "border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa]">
                  <CopyBlock
                    text={htmlTutorialNew.text}
                    language={htmlTutorialNew.language}
                    theme={htmlTutorialNew.theme}              
                    wrapLines 
                  />
              </div>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl font-semibold text-red-600">Table of contents</h3>
                <ul className="list-disc ml-6 mt-2">
                  <li className="mt-2 text-red-600 underline">
                    <a href="#1">Why Learn HTML?</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#2">Features of HTML</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#3">HTML Element and HTML Tag</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#4">HTML Page Structure</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#5">Web Browsers</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#6">HTML History</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#7">Advantages of HTML</a>
                  </li>
                  <li className="mt-2 text-red-600 underline">
                    <a href="#8">Disadvantages of HTML</a>
                  </li>
                </ul>
            </div>
            
    </div>
  );
};

export default HTMLIntroduction;
