import React from "react";

import { singleLineComment,multiLineComment } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLComments = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
    <div className="pl-0 flex flex-col gap-3 ">
    <h1 className="text-4xl font-semibold text-red-600">HTML Comments</h1>
      
     
      <p className="text-gray-600 mb-4">Last Updated: 25 Mar, 2025</p>

      
      <p className="text-lg font-semibold">HTML <span className="font-bold">comments</span> are used to add notes or explanations in the HTML code that are not displayed by the browser.</p>
      
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>They are useful for documenting the code, making it easier to understand and maintain.</li>
        <li>To add a comment, use the syntax <code className="bg-gray-200 px-2 py-1 rounded"> &lt;!-- your comment here --&gt; </code>.</li>
      </ul>
      <div className="bg-gray-100 border-l-4 border-red-600 p-4 my-4 rounded-lg ">
        <pre className="text-red-600 text-sm">
          {`<!-- This is a comment and will not be displayed on the webpage -->\n`}
          <span className="text-blue-700">{`<p>`}</span>
          This is visible text.
          <span className="text-blue-700">{`</p>`}</span>
        </pre>
      </div>

    
      <h2 className="text-lg font-semibold mt-4 text-red-600">In this example:</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>The text within the <code className="bg-gray-200 px-2 py-1 rounded">{`<!-- and -->`}</code> tags will not appear on the webpage.</li>
        <li>These comments can include reminders, warnings, or explanations about the code, which can be useful for anyone reading or editing the HTML document.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-red-600">Different Ways to Add Comments in HTML</h2>
      <p className="text-gray-700 mb-4">
        There are two main ways to write comments in HTML: single-line and
        multi-line comments. Both use the same basic syntax but differ in how
        they are implemented.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Comment</th>
              <th className="border border-gray-300 p-2">Descriptions</th>
              <th className="border border-gray-300 p-2">Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Single-line</td>
              <td className="border border-gray-300 p-2">
                The single-line comment is given inside the (<code>&lt;!-- comment --&gt;</code>) tag.
              </td>
              <td className="border border-gray-300 p-2">
                <code>&lt;!-- comment --&gt;</code>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Multi-line</td>
              <td className="border border-gray-300 p-2">
                It follows the syntax of a single-line comment by adding multiple lines in the comment.
              </td>
              <td className="border border-gray-300 p-2">
                <code>&lt;!-- Multi Line Comment --&gt;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-md text-gray-700 italic">
        Note: The shortcut for adding the comment through the keyboard is by typing <span className="font-bold">Ctrl + /</span> in <span className="italic">Windows</span>, and <span className="font-bold">Command + /</span> for <span className="italic">Mac users</span>.
      </div>
    </div>
    <h2 className="text-2xl font-bold text-red-600 mt-4 mb-4">More Examples of HTML Comments</h2>
      <h3 className="text-xl font-semibold mt-4 text-red-600">Single-Line and Inline Comments</h3>
      
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-4 ">
                <CopyBlock
                  text={singleLineComment.text}
                  language={singleLineComment.language}
                  theme={singleLineComment.theme}
                  wrapLines
                />
              </div>

      <h3 className="text-lg font-semibold mt-4">In this example:</h3>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>
          The code uses <span className="text-blue-600 underline">HTML</span> comments (<code>&lt;!-- comment --&gt;</code>) to add notes for developers, 
          which are not displayed on the webpage.
        </li>
        <li>
          The <code>&lt;h1&gt;</code> and <code>&lt;h2&gt;</code> tags display headings, while inline comments in <code>&lt;h2&gt;</code> 
          do not affect the visible text.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-red-600 mt-4 mb-4">Multi-Line Comments and Hidden Code Sections</h2>
      
      
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                  text={multiLineComment.text}
                  language={multiLineComment.language}
                  theme={multiLineComment.theme}
                  wrapLines
                />
              </div>

      <h3 className="text-lg font-semibold mt-4">In this example:</h3>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>
          The code uses <span className="text-blue-600 underline">HTML</span> comments (<code>&lt;!-- comment --&gt;</code>) to add notes for developers, 
          which are not displayed on the webpage.
        </li>
        <li>
            The <code>&lt;h1&gt;</code> and <code>&lt;h2&gt;</code> tags display headings, while multi-line comments are used to explain the code.
        </li>
      </ul>
    <h2 className="text-2xl font-semibold text-red-600 mb-4 mt-4">Uses of HTML Comments</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li><strong>Code Organization:</strong> Comments can help break up sections of code, making it easier to navigate, especially in larger projects.</li>
        <li><strong>Collaboration:</strong> When working with others, comments are crucial for explaining why certain HTML elements are used, or for leaving instructions for team members.</li>
        <li><strong>Debugging:</strong> Temporarily disabling parts of HTML code by commenting them out is a common use, allowing developers to isolate issues.</li>
        <li><strong>Documentation:</strong> Providing details or documentation within the code for future reference without the need for external documentation.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-red-600 mb-4 mt-4">Best Practices for Writing Useful and Clear Comments</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Be Concise and Relevant:</strong> Write short, meaningful comments that explain the <em>why</em> behind the code, not the obvious <em>what</em>.</li>
        <li><strong>Avoid Overcommenting:</strong> Don’t comment on everything. Focus on complex or non-intuitive sections of the code.</li>
        <li><strong>Keep Comments Updated:</strong> Regularly revise comments to ensure they stay accurate as the code evolves.</li>
        <li><strong>Use Consistent Style:</strong> Maintain a uniform tone and format for comments across the project to ensure clarity.</li>
        <li><strong>Avoid Sensitive Information:</strong> Never include passwords, keys, or sensitive data in comments.</li>
      </ul>
    </div>
      
    

      
    
  );
};

export default HTMLComments;
