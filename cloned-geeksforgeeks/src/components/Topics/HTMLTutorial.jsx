import React from "react";
import { htmlTutorialNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLTutorial = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Tutorial</h1>
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
        <div className="flex justify-center items-center h-full w-full mt-4 bg-red-100 rounded-2xl">
          <p className="text-black text-justify p-6 pt-3">
            <i>
              How Does HTML Work? - HTML documents are plain-text files saved
              with an .html extension. Browsers read these documents, interpret
              the markup (tags and attributes), and render the formatted content
              on your screen.
            </i>
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-red-600">
          &apos;Hello World&apos; Page in HTML
        </h2>
        <p>
          To show you how fun and easy HTML is, we have provided a classic
          example of writing "Hello, World!" in HTML
        </p>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
          <CopyBlock
            text={htmlTutorialNew.text}
            language={htmlTutorialNew.language}
            theme={htmlTutorialNew.theme}
            wrapLines
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-red-600">Why Learn HTML?</h2>
        <p>Learning HTML is essential for various practical reasons:</p>
        <div>
          <ol className="pl-4 text-lg">
            <li className="list-decimal">
              <b>Foundation of Web Development:</b> HTML is the starting point
              for creating websites. Understanding HTML is crucial for any web
              development or web design role.
            </li>
            <li className="list-decimal">
              <b>Universal Language of the Web:</b> HTML is the standard markup
              language used to create the structure of web pages. Knowledge of
              HTML is necessary to manage any content on the Internet.
            </li>
            <li className="list-decimal">
              <b>Easy to Learn:</b> HTML is straightforward compared to
              programming languages. Beginners can quickly learn how to create
              basic websites with just HTML.
            </li>
            <li className="list-decimal">
              <b>Career Opportunities:</b> Proficiency in HTML opens up various
              career paths, including web developer, content manager, and UX/UI
              designer roles.
            </li>
            <li className="list-decimal">
              <b>Gateway to Advanced Technologies:</b> Once you master HTML, you
              can easily move on to learn CSS, JavaScript, and other tools that
              enhance websites, making them more interactive and visually
              appealing.
            </li>
          </ol>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Getting Started with HTML: A Beginner’s Guide</h1>
      <p className="mt-2 text-lg">
        This <strong>HTML tutorial</strong> provides you with a step-by-step learning journey for mastering HTML. 
        You will start with HTML fundamentals, and then move on to advanced HTML5 topics. 
        By the end of this HTML tutorial, you will have a solid foundation in HTML.
      </p>
      <h2 className="text-xl font-semibold mt-4">1. HTML Basics</h2>
      <p className="text-lg">By learning the basics of HTML, you can start creating your own web pages and bring your ideas to life online.</p>
      <ul className="list-disc list-inside mt-2 text-blue-600">
        {[
          "Introduction to HTML",
          "HTML Editors",
          "HTML Comments",
          "HTML Elements",
          "HTML Attributes",
          "HTML Doctypes",
          "HTML Heading",
          "HTML Paragraphs",
          "HTML Links",
          "HTML Images",
          "HTML Semantics",
          "HTML Entities",
          "HTML Symbols"
        ].map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HTMLTutorial;
