import React from "react";
import { htmlTutorialNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";

const HTMLIntroduction = () => {
  return (
    <div className="content-container px-6 py-8">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML Tutorial</h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>

      {/* Introduction Paragraph */}
      <div className="mt-4">
        <p className="text-gray-800 text-justify break-words whitespace-normal">
          <strong>HTML</strong> stands for <b>HyperText Markup Language</b>. It
          is the standard language used to create and structure content on the
          web. It tells the web browser how to display text, links, images, and
          other forms of multimedia on a webpage. HTML sets up the basic
          structure of a website, and then CSS and JavaScript add style and
          interactivity to make it look and function better.
        </p>

        {/* Highlighted Info Box */}
        <div className="flex justify-center items-center mt-4 bg-red-100 rounded-2xl p-4">
          <p className="text-black text-justify break-words whitespace-normal italic">
            How Does HTML Work? - HTML documents are plain-text files saved with
            an <code>.html</code> extension. Browsers read these documents,
            interpret the markup (tags and attributes), and render the formatted
            content on your screen.
          </p>
        </div>
      </div>

      {/* Hello World Code Section */}
      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-red-600">
          'Hello World' Page in HTML
        </h2>
        <p className="break-words whitespace-normal">
          To show you how fun and easy HTML is, we have provided a classic
          example of writing "Hello, World!" in HTML.
        </p>

        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa] overflow-x-auto">
          <CopyBlock
            text={htmlTutorialNew.text}
            language={htmlTutorialNew.language}
            theme={htmlTutorialNew.theme}
            wrapLines
          />
        </div>
      </div>

      {/* Why Learn HTML Section */}
      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-red-600">Why Learn HTML?</h2>
        <p className="break-words whitespace-normal">
          Learning HTML is essential for various practical reasons:
        </p>
        <ol className="pl-4 text-lg list-decimal space-y-2">
          <li>
            <b>Foundation of Web Development:</b> HTML is the starting point for
            creating websites. Understanding HTML is crucial for any web
            development or web design role.
          </li>
          <li>
            <b>Universal Language of the Web:</b> HTML is the standard markup
            language used to create the structure of web pages. Knowledge of
            HTML is necessary to manage any content on the Internet.
          </li>
          <li>
            <b>Easy to Learn:</b> HTML is straightforward compared to programming
            languages. Beginners can quickly learn how to create basic websites
            with just HTML.
          </li>
          <li>
            <b>Career Opportunities:</b> Proficiency in HTML opens up various
            career paths, including web developer, content manager, and UX/UI
            designer roles.
          </li>
          <li>
            <b>Gateway to Advanced Technologies:</b> Once you master HTML, you
            can easily move on to learn CSS, JavaScript, and other tools that
            enhance websites, making them more interactive and visually
            appealing.
          </li>
        </ol>
      </div>
      <div className="min-h-20 mt-10  w-full">
        <div className="flex justify-between items-center p-20 pb-0 pt-0">
          <div></div>
          <div>
            <button className="text-lg border border-red-400 flex items-center rounded-2xl p-4 font-semibold hover:scale-95 duration-200 hover:text-gray-800 cursor-pointer">
              Next Article
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-20 mt-5  w-full">
        <div className="flex justify-between items-center p-20 pb-0 pt-0">
          <div></div>
          <div>
            <button className="text-lg border border-red-400 flex items-center rounded-2xl p-4 font-semibold hover:scale-95 duration-200 hover:text-gray-800 cursor-pointer">
              Next Article
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLIntroduction;
