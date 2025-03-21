import React from "react";
import { htmlTutorialNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
const HomeSection = () => {
  return (
    <>
      {/* <div>
        <SubNav />
      </div> */}

      <div className="content-container overflow-y-auto min-h-screen pl-6">
        <div className="pl-0 flex flex-col gap-3 ">
          <h1 className="text-4xl font-semibold text-red-600">HTML Tutorial</h1>
          <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
        </div>
        <div className="pl-0 mt-4">
          <p className="text-gray-800 text-justify">
            <strong>HTML</strong> stands for <b>HyperText Markup Language</b>.
            It is the standard language used to create and structure content on
            the web. It tells the web browser how to display text, links,
            images, and other forms of multimedia on a webpage. HTML sets up the
            basic structure of a website, and then CSS and JavaScript add style
            and interactivity to make it look and function better.
          </p>
          <div className="flex justify-center items-center h-full w-full mt-4 bg-red-100 rounded-2xl">
            <p className="text-black text-justify p-6 pt-3">
              <i>
                How Does HTML Work? - HTML documents are plain-text files saved
                with an .html extension. Browsers read these documents,
                interpret the markup (tags and attributes), and render the
                formatted content on your screen.
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
          <h2 className="text-3xl font-semibold text-red-600">
            Why Learn HTML?
          </h2>
          <p>Learning HTML is essential for various practical reasons:</p>
          <div>
            <ol className="pl-4 text-lg">
              <li className="list-decimal">
                <b>Foundation of Web Development:</b> HTML is the starting point
                for creating websites. Understanding HTML is crucial for any web
                development or web design role.
              </li>
              <li className="list-decimal">
                <b>Universal Language of the Web:</b> HTML is the standard
                markup language used to create the structure of web pages.
                Knowledge of HTML is necessary to manage any content on the
                Internet.
              </li>
              <li className="list-decimal">
                <b>Easy to Learn:</b> HTML is straightforward compared to
                programming languages. Beginners can quickly learn how to create
                basic websites with just HTML.
              </li>
              <li className="list-decimal">
                <b>Career Opportunities:</b> Proficiency in HTML opens up
                various career paths, including web developer, content manager,
                and UX/UI designer roles.
              </li>
              <li className="list-decimal">
                <b>Gateway to Advanced Technologies:</b> Once you master HTML,
                you can easily move on to learn CSS, JavaScript, and other tools
                that enhance websites, making them more interactive and visually
                appealing.
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-red-600">
            Features of HTML
          </h2>

          <div>
            <ol className="pl-4 text-lg">
              <li className="list-disc">
                It is easy to learn and easy to use.
              </li>
              <li className="list-disc">It is platform-independent.</li>
              <li className="list-disc">
                Images, videos, and audio can be added to a web page.
              </li>
              <li className="list-disc">Hypertext can be added to the text.</li>
              <li className="list-disc">It is a markup language.</li>
            </ol>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-red-600">
            Getting Started with HTML: A Beginner&apos;s Guide
          </h2>
          <p>
            This HTML tutorial provides you with a step-by-step learning journey
            for mastering HTML. You will start with HTML fundamentals, and then
            move on to advanced HTML5 topics. By the end of this HTML tutorial,
            you will have a solid foundation in HTML.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-red-600">
            HTML Tutorial - Prerequisites
          </h2>
          <p>
            This <b>HTML tutorial</b> is perfect for beginners! No prior
            knowledge is needed, but basic computer skills will help you to get
            started. After completing this tutorial, you'll have a basic
            understanding of HTML and be ready for the next stage of web
            development, CSS.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-red-600">
            Best Approach to Learn HTML:
          </h2>
          <p>
            Here's the step-by-step approach to learn and master HTML
            efficiently and effectively:
          </p>
          <div>
            <ol className="pl-4 text-lg flex flex-col gap-3">
              <li className="list-decimal">
                <b>Start with Basics:</b> Understand what HTML is and get
                comfortable with its syntax, including tags, elements, and
                attributes.
              </li>
              <li className="list-decimal">
                <b>Practice Basic Tags:</b> Learn to use foundational tags like{" "}
                {`<html>, <head>, <title>, and <body>`}, and practice formatting
                text with tags like {`<p>, <h1>, and <a>`}.
              </li>
              <li className="list-decimal">
                <b>Create Simple Web Pages:</b> Apply your skills by building
                basic web pages. Try making a personal bio or a hobby blog to
                practice structuring content.
              </li>
              <li className="list-decimal">
                <b>Learn Intermediate HTML:</b> Get into lists, tables, forms,
                and semantic elements like {`<article> and <section>`} to
                organize content better.
              </li>
              <li className="list-decimal">
                <b>Explore HTML5:</b> Learn advanced features such as multimedia
                integration using {`<audio> and <video>`}, and understand how to
                use the {`<canvas>`} element for drawings.
              </li>
              <li className="list-decimal">
                <b>Work on Real Projects:</b> Build projects that challenge you,
                like a full personal portfolio or small business websites to
                refine your skills and solve real-world problems.
              </li>
              <li className="list-decimal">
                <b>Stay Updated:</b> Keep learning new HTML features and web
                standards by following blogs, participating in forums, and
                practicing with the latest updates.
              </li>
              <li className="list-decimal">
                <b>Showcase Your Work:</b> Create a professional portfolio to
                display your projects and share your HTML expertise on platforms
                like GitHub and LinkedIn.
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-red-600">
            Applications of HTML
          </h2>
          <p>
            HTML (HyperText Markup Language) is versatile in web development,
            with various practical applications:
          </p>
          <div>
            <ol className="pl-4 text-lg flex flex-col gap-3">
              <li className="list-decimal">
                Website Development: HTML forms the structure of websites,
                organizing content like text, images, and links for easy
                navigation.
              </li>

              <li className="list-decimal">
                <b>Web Applications:</b> HTML5 enables dynamic forms, multimedia
                handling, and interactive user experiences directly in browsers.
              </li>
              <li className="list-decimal">
                <b>Email Templates:</b> HTML helps create visually appealing,
                responsive email templates that adapt to different devices.
              </li>
              <li className="list-decimal">
                <b>Game Development:</b> HTML5, paired with JavaScript, allows
                the creation of simple, lightweight browser games.
              </li>
              <li className="list-decimal">
                <b>Online Learning & Documentation:</b> HTML structures
                educational content, making online resources easy to read and
                navigate.
              </li>
              <li className="list-decimal">
                <b> Embedding Content:</b> HTML simplifies embedding videos,
                maps, and social media feeds into web pages.
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-red-600">
            Careers with HTML in 2025
          </h2>
          <p>
            HTML is the most fundamental technology used for web development.
            Though expecting a high-paying job with just HTML knowledge can be
            challenging - if you want to build a successful career, you need to
            learn additional technologies also. For web development, you should
            also know CSS, JavaScript, and either a full-stack or front-end
            framework based on your interests.
          </p>
          <div>
            <ol className="pl-4 text-lg flex flex-col gap-3">
              <li className="list-decimal">
                <b>Web Content Editor:</b> Creates and manages website content
                using HTML.
              </li>
              <li className="list-decimal">
                <b>Email Developer:</b> Designs and codes HTML emails for
                marketing campaigns.
              </li>
              <li className="list-decimal">
                <b>Landing Page Designer:</b> Builds landing pages to boost
                marketing conversions.
              </li>
              <li className="list-decimal">
                <b>SEO Specialist:</b> Optimizes website content using HTML for
                better search engine ranking.
              </li>
              <li className="list-decimal">
                <b>HTML Email Tester:</b> Tests HTML emails to ensure they
                display correctly on different devices.
              </li>
              <li className="list-decimal">
                <b>Technical Writer:</b> Writes documentation that may need
                basic HTML knowledge for web publishing.
              </li>
            </ol>
          </div>
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
      </div>
    </>
  );
};

export default HomeSection;
