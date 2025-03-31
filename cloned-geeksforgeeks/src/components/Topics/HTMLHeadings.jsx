import React from "react";
import { CopyBlock } from "react-code-blocks";
import {
 HTMLHeading,HTMLHeading1
} from "../../utils/CodeBlocks";
import { attributes } from "../../utils/HTMLAttributes";
const HTMLHeadings = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Headings</h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <h4 className="text-gray-700 mt-5"><b>HTML headings</b> are used to define the titles and subtitles of sections on a webpage. They help organize the content and create a structure that is easy to navigate.</h4>
      <ul className="list-disc list-inside pl-5 mt-5">
        <li>Proper use of headings enhances readability by organizing content into clear sections.</li>
        <li>Search engines utilize headings to understand page structure, aiding in SEO.</li>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
                 <CopyBlock
                            text={HTMLHeading.text}
                            language={HTMLHeading.language}
                            theme={HTMLHeading.theme}
                            wrapLines
                          />
              </div>
        <li>This code uses HTML heading tags (&lt;h1&gt; to &lt;h6&gt;) to create headings that range from the main heading to the smallest subheading.</li>
        <li>Each tag shoes the hierarchy of the content, helping organize the structure of the webpage.</li>
      </ul>
      <p className="text-gray-700 mt-5"><b>Note:</b> the &#39;h&#39; inside the tag should always be in lowercase.</p>
      <h3 className="text-xl font-semibold text-red-600 mt-6">
      Levels of HTML Heading Tags
      </h3>
      <h4 className="text-gray-700 mt-5">HTML offers <b>six levels of heading tags,</b> each serving a different purpose in structuring your content:</h4>
      <img src="../heading.png" className="ml-50"></img>
      <div className="text-gray-700 mt-5 mb-5">
            <h3 className="text-xl font-semibold text-red-600 mt-6">
            &lt;h1&gt; – Main Heading (Largest)
            </h3>
            <ul className="list-disc m-6">
                <li>Represents the primary focus of the page, usually used for the main title.</li>
                <li>Use only one &lt;h1&gt; tag per page for the best SEO practices.</li>
                <li>Makes it clear to both users and search engines what the main topic is.</li>
            </ul>
      </div>
      <div className="text-gray-700 mt-5 mb-5">
            <h3 className="text-xl font-semibold text-red-600 mt-6">
            &lt;h2&gt; – Subheading
            </h3>
            <ul className="list-disc m-6">
                <li>Ideal for dividing the content into major sections.</li>
                <li>If the content has further subsections, use &lt;h3&gt; to create a logical flow.</li>
            </ul>
      </div>
      <div className="text-gray-700 mt-5 mb-5">
            <h3 className="text-xl font-semibold text-red-600 mt-6">
            &lt;h3&gt; to &lt;h6&gt; –  Smaller headings
            </h3>
            <ul className="list-disc m-6">
                <li>These heading levels are used for finer subdivisions, gradually decreasing in size and importance.</li>
                <li>&lt;h3&gt; is used for subsections under &lt;h2&gt;, while &lt;h4&gt; to &lt;h6&gt; are used for additional, less important subdivisions.</li>
                <li>&lt;h6&gt; defines the least important heading.</li>
            </ul>
      </div>
      <h3 className="text-xl font-semibold text-red-600 mt-6">
      Customization in HTML Heading Tags
      </h3>
      <h4 className="text-gray-700 mt-5"><b>Example:</b> Here&#39;s how you can apply basic styles to HTML heading tags:</h4>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
                 <CopyBlock
                            text={HTMLHeading1.text}
                            language={HTMLHeading1.language}
                            theme={HTMLHeading1.theme}
                            wrapLines
                          />
              </div>
        <h4 className="text-gray-700 font-bold">Output:</h4>
        <img src="/heading1.png" className="ml-50"></img>
        <h3 className="text-xl font-semibold text-red-600 mt-6">
        Best Practices for Using HTML Headings
      </h3>
      <ul className="list-decimal m-6">
        <div className="text-gray-700 mt-5 mb-5">
            <li className="text-red-600 font-semibold">Use Only One &lt;h1&gt; per Page</li>
            <p className="ml-5 text-justify mt-5">The &lt;h1&gt; tag should be reserved for the main title of the page. Too many &lt;h1&gt; tags can confuse both users and search engines about the content&#39;s priority.</p>
        </div>
        <div className="text-gray-700 mt-5 mb-5">
            <li className="text-red-600 font-semibold">Maintain a Logical Structure</li>
            <p className="ml-5 text-justify mt-5">Follow a logical hierarchy of headings (&lt;h1&gt; → &lt;h2&gt; → &lt;h3&gt;) to ensure content is organized. Don&#39;t jump directly from &lt;h1&gt; to &lt;h4&gt;, as it can make the content harder to navigate.</p>
        </div>
        <div className="text-gray-700 mt-5 mb-5">
            <li className="text-red-600 font-semibold">Keep Headings Descriptive</li>
            <p className="ml-5 text-justify mt-5">Headings should clearly describe the content that follows. This makes it easier for readers to understand what each section is about.</p>
        </div>
        <div className="text-gray-700 mt-5 mb-5">
            <li className="text-red-600 font-semibold">Avoid Overusing Heading Tags</li>
            <p className="ml-5 text-justify mt-5">Headings are for organizing content, not for styling text. Use them where appropriate and avoid using heading tags for emphasis or styling alone.</p>
        </div>
        
      </ul>
    </div>

  );
};

export default HTMLHeadings;
