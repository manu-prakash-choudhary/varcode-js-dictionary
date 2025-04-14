import React from "react";
import { htmlTutorialNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLIntroduction = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:px-6 lg:pl-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
          HTML Introduction
        </h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      
      <div className="mt-3 md:mt-4">
        <p className="text-gray-800 text-sm md:text-base text-justify">
          <strong>HTML</strong> stands for <b>HyperText Markup Language</b>. It
          is the standard language used to create and structure content on the
          web. It tells the web browser how to display text, links, images, and
          other forms of multimedia on a webpage. HTML sets up the basic
          structure of a website, and then CSS and JavaScript add style and
          interactivity to make it look and function better.
        </p>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-sm md:text-base">
          <li>
            HTML is a markup language, not a programming language, meaning it
            annotates text to define how it is structured and displayed by web
            browsers.
          </li>
          <li>
            It forms the building blocks of all websites and is complemented by
            CSS for style and JavaScript for interactivity.
          </li>
        </ul>
        <p className="mt-3 md:mt-4 p-2 md:p-4 text-sm md:text-base">
          In a nutshell, HTML is all about{" "}
          <b>organizing and displaying information</b> on a webpage. We can
          think of it as the <b>bones</b> or <b>structure</b> of a webpage.
        </p>
      </div>
      
      <div className="text-gray-800">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5">
          Basic HTML Code Example
        </h3>

        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] overflow-x-auto">
          <CopyBlock
            text={htmlTutorialNew.text}
            language={htmlTutorialNew.language}
            theme={htmlTutorialNew.theme}
            wrapLines
          />
        </div>
      </div>
      
      <div className="mt-4 md:mt-5">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">
          Table of contents
        </h3>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-sm md:text-base">
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#1">Why Learn HTML?</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#2">Features of HTML</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#3">HTML Element and HTML Tag</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#4">HTML Page Structure</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#5">Web Browsers</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#6">HTML History</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#7">Advantages of HTML</a>
          </li>
          <li className="mt-1 md:mt-2 text-red-600">
            <a href="#8">Disadvantages of HTML</a>
          </li>
        </ul>
      </div>

      <div className="text-gray-800">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="1">
          Why Learn HTML?
        </h3>
        <p className="mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          Here are <b>5 common reasons to learn HTML:</b>
        </p>
        <ol className="pl-4 text-sm md:text-base space-y-2">
          <li className="list-decimal">
            <b>Foundation of Web Development:</b> HTML is the starting point for
            creating websites. Understanding HTML is crucial for any web
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
        
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="2">
          Features of HTML
        </h3>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-sm md:text-base space-y-1">
          <li>It is easy to learn and easy to use.</li>
          <li>It is platform-independent.</li>
          <li>Images, videos, and audio can be added to a web page.</li>
          <li>Hypertext can be added to the text.</li>
          <li>It is a markup language.</li>
        </ul>
        
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="3">
          HTML Element and HTML Tag
        </h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          HTML Element and HTML Tags are related but distinct. An{" "}
          <strong className="font-semibold">HTML element</strong> is the
          complete structure, including the opening tag, content (if any), and
          the closing tag (if applicable).
        </p>

        <p className="mt-2 text-gray-700 text-sm md:text-base">
          On the other hand, a <strong className="font-semibold">tag</strong> is
          the actual keyword or name enclosed in angle brackets (
          <code className="text-gray-900 font-mono">&lt; &gt;</code>) that tells
          the browser what kind of content to expect.
        </p>

        <div className="w-full mt-4 md:mt-6 p-2 md:p-4 border rounded-lg shadow bg-white text-center overflow-x-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="w-full max-w-md mx-auto">
            {/* <!-- Text for tags and content with boxes underneath --> */}
            <text x="60" y="40" fontFamily="monospace" fontSize="16">
              &lt;Button&gt;
            </text>
            <text
              x="210"
              y="40"
              fontFamily="sans-serif"
              fontSize="18"
              fill="red"
              fontWeight="bold"
            >
              varCODE
            </text>
            <text x="390" y="40" fontFamily="monospace" fontSize="16">
              &lt;/Button&gt;
            </text>

            {/* <!-- Upward arrows --> */}
            <line
              x1="95"
              y1="50"
              x2="95"
              y2="80"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />
            <line
              x1="250"
              y1="50"
              x2="250"
              y2="80"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />
            <line
              x1="425"
              y1="50"
              x2="425"
              y2="80"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />

            {/* <!-- Labels for the parts --> */}
            <text
              x="90"
              y="100"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Opening Tag
            </text>
            <text
              x="250"
              y="100"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Content
            </text>
            <text
              x="425"
              y="100"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Closing Tag
            </text>

            {/* <!-- Horizontal lines connecting opening tag and closing tag --> */}
            <line
              x1="95"
              y1="150"
              x2="95"
              y2="130"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="95"
              y1="150"
              x2="425"
              y2="150"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="425"
              y1="150"
              x2="425"
              y2="130"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* <!-- Upward arrow for Element label --> */}
            <line
              x1="250"
              y1="150"
              x2="250"
              y2="200"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />
            <text
              x="250"
              y="220"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Element
            </text>

            {/* <!-- Arrow marker definition --> */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="10 0, 0 3.5, 10 7" fill="#000" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="4">
        HTML Page Structure
      </h3>
      <p className="mt-2 text-gray-700 text-justify text-sm md:text-base">
        The basic structure of an HTML page is shown below. It contains the essential building-block elements (i.e. doctype declaration, HTML, head, title, and body elements) upon which all web pages are created.
      </p>
      
      <div className="flex justify-center my-4 md:my-10">
        <img src="/html_pg_structure.png" alt="HTML Page Structure" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
      
      <ul className="mt-3 md:mt-4 text-gray-700 list-disc ml-4 md:ml-6 text-sm md:text-base space-y-2">
        <li>
          <span className="text-red-600 font-semibold">&lt;!DOCTYPE html&gt;</span> – This is the document type declaration, not a tag. It declares that the document is an HTML5 document.
        </li>
        <li>
          <span className="text-red-600 font-semibold">&lt;html&gt;</span> – This is called the HTML root element. All other elements are contained within it.
        </li>
        <li>
          <span className="text-red-600 font-semibold">&lt;head&gt;</span> – The head tag contains the "behind the scenes" elements for a webpage.
          <ul className="ml-4 md:ml-5 list-disc mt-1 space-y-1">
            <li><span className="text-blue-600 font-semibold">&lt;title&gt;</span>: Defines the title displayed on the browser tab.</li>
            <li><span className="text-blue-600 font-semibold">&lt;meta&gt;</span>: Provides information like the character set or viewport settings.</li>
            <li><span className="text-blue-600 font-semibold">&lt;link&gt;</span>: Links external stylesheets or resources.</li>
            <li><span className="text-blue-600 font-semibold">&lt;style&gt;</span>: Embeds internal CSS styles.</li>
            <li><span className="text-blue-600 font-semibold">&lt;script&gt;</span>: Embeds JavaScript for functionality.</li>
          </ul>
        </li>
        <li>
          <span className="text-red-600 font-semibold">&lt;title&gt;</span> – The title is displayed at the top of the browser.
        </li>
        <li>
          <span className="text-red-600 font-semibold">&lt;h2&gt;</span> – The <code>&lt;h2&gt;</code> tag is a second-level heading tag.
        </li>
        <li>
          <span className="text-red-600 font-semibold">&lt;p&gt;</span> – The <code>&lt;p&gt;</code> tag represents a paragraph of text.
        </li>
        <li>
          <span className="text-red-600 font-semibold">&lt;body&gt;</span> – The body tag encloses all the visible content of a webpage.
        </li>
      </ul>
      
      <p className="mt-3 md:mt-4 text-sm md:text-base">
        An HTML document can be created using an <span className="text-red-600 font-semibold cursor-pointer">HTML text editor</span>. Save the text file using the ".html" or ".htm" extension.
      </p>

      <div className="mt-3 md:mt-4 p-2 md:p-3 bg-gray-100 border-l-4 border-red-600 text-gray-700 text-sm md:text-base">
        <strong>Note:</strong> Basic/built-in text editors are <span className="font-semibold">Notepad (Windows)</span> and <span className="font-semibold">TextEdit (MacOS)</span>. Other advanced text editors include <span className="font-semibold">Sublime Text, Visual Studio Code, Froala</span>, etc.
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="6">
        HTML History
      </h3>
      <p className="mt-2 text-gray-700 text-sm md:text-base">
        Currently, we are using <span className="text-red-600 font-semibold">HTML5</span>, which is the latest and most advanced version of HTML.
      </p>
      <p className="mt-2 text-gray-700 text-sm md:text-base">
        HTML was initially created by <span className="font-bold">Tim Berners-Lee</span> in 1991 as a way to share and structure documents on the web.
      </p>
      <p className="mt-2 text-gray-700 text-sm md:text-base">
        The first-ever version was <span className="font-bold">HTML 1.0</span>, a basic and limited version. However, the first standardized version, <span className="font-bold">HTML 2.0</span>, was published in 1995, laying the foundation for web development as we know it today.
      </p>

      <div className="mt-4 md:mt-6 p-3 md:p-6 bg-red-100 rounded-lg border border-green-300 shadow-md overflow-x-auto">
        <h3 className="text-base md:text-lg font-bold text-red-700 text-center">HTML Released Year</h3>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between mt-4 space-y-4 md:space-y-0 space-x-2 md:space-x-4">
          <div className="text-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-red-700 text-white rounded-full flex items-center justify-center text-sm md:text-lg font-bold">HTML 1</div>
            <p className="mt-1 text-xs md:text-sm font-semibold">1993</p>
          </div>
          <span className="hidden md:block text-red-600 text-2xl">→</span>

          <div className="text-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-red-700 text-white rounded-full flex items-center justify-center text-sm md:text-lg font-bold">HTML 2</div>
            <p className="mt-1 text-xs md:text-sm font-semibold">1995</p>
          </div>
          <span className="hidden md:block text-red-600 text-2xl">→</span>

          <div className="text-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-red-700 text-white rounded-full flex items-center justify-center text-sm md:text-lg font-bold">HTML 3</div>
            <p className="mt-1 text-xs md:text-sm font-semibold">1997</p>
          </div>
          <span className="hidden md:block text-red-600 text-2xl">→</span>

          <div className="text-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-red-700 text-white rounded-full flex items-center justify-center text-sm md:text-lg font-bold">HTML 4</div>
            <p className="mt-1 text-xs md:text-sm font-semibold">1999</p>
          </div>
          <span className="hidden md:block text-red-600 text-2xl">→</span>

          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">HTML 4.01</div>
            <p className="mt-1 text-xs md:text-sm font-semibold">2012</p>
          </div>
          <span className="hidden md:block text-red-600 text-2xl">→</span>

          <div className="text-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-red-700 text-white rounded-full flex items-center justify-center text-sm md:text-lg font-bold">HTML 5</div>
            <p className="mt-1 text-xs md:text-sm font-semibold">2014</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="7">
        Advantages of HTML
      </h3>
      <ul className="mt-2 list-disc list-inside text-gray-700 text-sm md:text-base">
        <li>HTML is used to build websites.</li>
        <li>It is supported by all browsers.</li>
        <li>
          It can be integrated with other languages like{" "}
          <a href="#" className="text-green-600 font-semibold">
            CSS
          </a>
          ,{" "}
          <a href="#" className="text-green-600 font-semibold">
            JavaScript
          </a>
          , etc.
        </li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5" id="8">
        Disadvantages of HTML
      </h3>
      <ul className="mt-2 list-disc list-inside text-gray-700 text-sm md:text-base">
        <li>
          HTML can only create static web pages. For dynamic web pages and
          logic, we need{" "}
          <a href="#" className="text-green-600 font-semibold">
            JavaScript
          </a>
          .
        </li>
        <li>A large amount of code has to be written to create a simple web page.</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-5 mb-3 md:mb-5">
        Conclusion
      </h3>
      <p className="mt-2 text-gray-700 text-sm md:text-base">
        In conclusion, mastering HTML is a fundamental step in your web
        development journey. This guide serves as a comprehensive resource for
        understanding HTML, from the basics to more advanced topics. Remember,
        HTML is more than just a markup language – it's a powerful tool for
        creating engaging, accessible, and SEO-friendly websites.
      </p>
      <p className="mt-2 text-gray-700 text-sm md:text-base mb-6">
        To learn more about HTML, visit the{" "}
        <a href="/" className="text-red-600 font-semibold">
          HTML Tutorial
        </a>{" "}
        Page.
      </p>
    </div>
  );
};

export default HTMLIntroduction;