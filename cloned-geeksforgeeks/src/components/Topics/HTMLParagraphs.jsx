import React from "react";
import { CopyBlock } from "react-code-blocks";
import {
  HTMLParaP1,
  HTMLParaP2,
  HTMLParaP3,
  HTMLParaP4,
  HTMLParaP5,
  HTMLParaP6,
} from "../../utils/CodeBlocks";
import { attributes } from "../../utils/HTMLAttributes";

const HTMLParagraphs = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:px-6 lg:pl-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
          HTML Paragraphs
        </h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>

      <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-sm md:text-base">
        <b>A paragraph in HTML</b> is simply a block of text enclosed within the
        &lt;p&gt; tag. The &lt;p&gt; tag helps divide content into manageable,
        readable sections. It&#39;s the go-to element for wrapping text in a web
        page that is meant to be displayed as a distinct paragraph.
      </h4>
      
      <h3 className="text-lg md:text-xl font-semibold text-red-600 mt-4 md:mt-6">Syntax:</h3>
      <div className="bg-gray-100 p-2 md:p-3 text-gray-700 rounded mt-3 md:mt-5 text-sm md:text-base">
        <code>&lt;p&gt; Content&lt;/p&gt;</code>
      </div>
      
      <h3 className="text-lg md:text-xl font-semibold text-red-600 mt-4 md:mt-6">
        How HTML Paragraphs are Rendered?
      </h3>
      <ul className="list-disc list-inside pl-2 md:pl-5 mt-3 md:mt-5 text-sm md:text-base">
        <li>
          Adds space before and after the paragraph to visually separate it from
          other content.
        </li>
        <li>
          Breaks the text into a single block, creating an easy-to-read section.
        </li>
      </ul>
      
      <h3 className="text-lg md:text-xl font-semibold text-red-600 mt-4 md:mt-6">
        HTML Paragraph Code Example
      </h3>
      <div className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5">
        <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          <b>Example 1:</b> Here&#39;s an example showing two paragraphs in
          HTML:
        </h4>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLParaP1.text}
            language={HTMLParaP1.language}
            theme={HTMLParaP1.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-base md:text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start mt-2">
          <img src="/Paragraphs pic/p1.png" className="h-auto max-w-full md:h-20 md:w-80" alt="Paragraph example 1" />
        </div>
      </div>
      
      <h3 className="text-lg md:text-xl font-semibold text-red-600 mt-4 md:mt-6">
        Properties of the paragraph Tag:
      </h3>
      <ul className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 list-disc ml-4 md:ml-10 text-sm md:text-base">
        <li className="mt-2 md:mt-3">
          The browser reduces multiple spaces added by users to a single space.
        </li>
        <li className="mt-2 md:mt-3">
          If a user adds various lines, the browser compresses them into one
          line.
        </li>
        <li className="mt-2 md:mt-3">
          By default, the display of the paragraph element is set to "block,"
          meaning each new paragraph is placed on a new line. This behavior can
          be modified using CSS.
        </li>
      </ul>
      
      <div className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5">
        <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          <b>Example 2:</b> This example explains the HTML &lt;p&gt; tag having
          multiple lines.
        </h4>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLParaP2.text}
            language={HTMLParaP2.language}
            theme={HTMLParaP2.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-base md:text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start mt-2">
          <img src="/Paragraphs pic/p2.png" className="h-auto max-w-full md:h-30" alt="Paragraph example 2" />
        </div>
      </div>
      
      <div className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-6">
          The &lt;br&gt; tag
        </h3>
        <h4 className="text-red-600 font-semibold text-base md:text-lg mt-3 md:mt-5">Syntax:</h4>
        <div className="bg-gray-100 p-2 md:p-3 text-gray-700 rounded mt-3 md:mt-5 text-sm md:text-base">
          <code>&lt;br&gt;</code>
        </div>
        <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          <b>Example:</b> This example explains the &lt;br&gt; tag inside the
          &lt;p&gt; tag to add the line-break.
        </h4>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLParaP3.text}
            language={HTMLParaP3.language}
            theme={HTMLParaP3.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-base md:text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start mt-2">
          <img src="/Paragraphs pic/p3.png" className="h-auto max-w-full md:h-50 md:w-80" alt="Break tag example" />
        </div>
      </div>

      <div className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-6">
          The Horizontal Rules &lt;hr&gt; tag
        </h3>
        <h4 className="text-gray-700 mt-3 md:mt-5 text-sm md:text-base">
          The HTML &lt;hr&gt; tag is used to create a horizontal rule or line,
          visually separating content on a webpage. Use &lt;hr&gt; when you want
          to insert a horizontal line to signify a division between sections or
          elements, providing a clear visual break in the page.
        </h4>
        <h4 className="text-red-600 font-semibold text-base md:text-lg mt-3 md:mt-5">Syntax:</h4>
        <div className="bg-gray-100 p-2 md:p-3 text-gray-700 rounded mt-3 md:mt-5 text-sm md:text-base">
          <code>&lt;hr&gt;</code>
        </div>
        <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          <b>Example:</b> In this example we will use the &lt;hr&gt; tag with an
          example by using &lt;p&gt; tag also.
        </h4>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLParaP4.text}
            language={HTMLParaP4.language}
            theme={HTMLParaP4.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-base md:text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start mt-2">
          <img src="/Paragraphs pic/p4.png" className="h-auto max-w-full md:h-50" alt="HR tag example" />
        </div>
      </div>

      <div className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-6">
          Align attribute
        </h3>
        <h4 className="text-gray-700 mt-3 md:mt-5 text-sm md:text-base">
          The &lt;p&gt; tag specifically supports the alignment attribute and
          allows us to align our paragraphs in left, right, or center alignment.{" "}
        </h4>
        <h4 className="text-red-600 font-semibold text-base md:text-lg mt-3 md:mt-5">Syntax:</h4>
        <div className="bg-gray-100 p-2 md:p-3 text-gray-700 rounded mt-3 md:mt-5 text-sm md:text-base">
          <code>&lt;p align="value"&gt;</code>
        </div>
        <div className="bg-gray-50 p-2 md:p-3 text-gray-700 rounded mt-3 md:mt-5 text-sm md:text-base">
          <h5>
            <b>Note:</b> The align attribute is deprecated in HTML5, and styles
            should be used via CSS for better practices.
          </h5>
        </div>
        <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          <b>Example:</b> This example explains the align attribute to align the
          content in the &lt;p&gt; tag.
        </h4>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLParaP5.text}
            language={HTMLParaP5.language}
            theme={HTMLParaP5.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-base md:text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start mt-2">
          <img src="/Paragraphs pic/p5.png" className="h-auto max-w-full md:h-50" alt="Align attribute example" />
        </div>
      </div>

      <div className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-6">
          The &lt;pre&gt; tag
        </h3>
        <h4 className="text-gray-700 mt-3 md:mt-5 text-sm md:text-base">
          The HTML &lt;pre&gt; tag is used for pre-formatted text. It keeps the
          original spaces and line breaks exactly as they are in the code. When
          you use &lt;pre&gt;, the text appears in a fixed-width font,
          preserving the formatting and layout just as it looks in the HTML
          code.
        </h4>
        <h4 className="text-red-600 font-semibold text-base md:text-lg mt-3 md:mt-5">Syntax:</h4>
        <div className="bg-gray-100 p-2 md:p-3 text-gray-700 rounded mt-3 md:mt-5 text-sm md:text-base">
          <code>&lt;pre&gt; Content &lt;/pre&gt;</code>
        </div>

        <h4 className="text-gray-700 mt-3 md:mt-5 mb-3 md:mb-5 text-base md:text-lg">
          <b>Example:</b> This example explains the use of the &lt;pre&gt; tag in
          the &lt;p&gt; tag.
        </h4>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLParaP6.text}
            language={HTMLParaP6.language}
            theme={HTMLParaP6.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-base md:text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start mt-2">
          <img src="/Paragraphs pic/p6.png" className="h-auto max-w-full md:h-50" alt="Pre tag example" />
        </div>
      </div>
      
      <div className="text-gray-700 mt-4 md:mt-5 mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-4 md:mt-6">
          Avoiding Common Mistakes with Paragraphs
        </h3>
        <ol className="list-decimal ml-4 md:ml-10 text-sm md:text-base">
          <li className="mt-3 md:mt-5">
            <b>Avoid Nested Paragraphs: </b>
            <p className="mt-1">You cannot nest paragraphs within one another. Each &lt;p&gt; tag should contain only the text for one block of content.</p>
          </li>
          <li className="mt-3 md:mt-5">
            <b>Avoid Using &lt;p&gt; for Non-Textual Content: </b>
            <p className="mt-1">The &lt;p&gt; tag is meant for text-based content. If you need to wrap images, tables, or other elements, use appropriate tags like &lt;img&gt;, &lt;table&gt;, or &lt;div&gt;.</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HTMLParagraphs;