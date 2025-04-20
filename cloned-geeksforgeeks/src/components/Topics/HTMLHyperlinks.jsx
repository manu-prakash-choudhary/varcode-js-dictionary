import React from 'react';
import { htmlLink1, htmlLink2 } from '../../utils/CodeBlocks';
import { CopyBlock } from 'react-code-blocks';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';

const HTMLHyperlinks = () => {
  return (
    <div className="content-container min-h-screen px-4 sm:px-6 lg:px-12 py-6 text-base sm:text-lg tracking-wide">
      <div className="border-b pb-3 mb-6 border-gray-200">
        <h1 className="text-2xl sm:text-3xl text-red-600 font-semibold">HTML Links Hyperlinks</h1>
        <p className="text-gray-500 text-sm mt-2">Last Updated : 25 March, 2025</p>
      </div>

      <div>
        <p className="mb-4">
          HTML Links, also known as <span className="font-medium">hyperlinks</span>, are defined by the <code>&lt;a&gt;</code> tag in HTML, which stands for "anchor". These links are essential for navigating between web pages and directing users to different sites, documents, or sections within the same page.
        </p>

        <p className="mb-4">
          The basic attributes of the <code>&lt;a&gt;</code> tag include <code>href</code>, <code>title</code>, and <code>target</code>, among others.
        </p>

        <div className="font-semibold text-red-600 mb-2 text-xl sm:text-2xl">Basic Syntax of an HTML Link:</div>
        <div className="bg-red-100 p-4 rounded mb-4 text-sm sm:text-base overflow-x-auto">
          <code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code>
        </div>

        <p className="mb-4">
          <strong>Note:</strong> A hyperlink can be represented by an image or any other HTML element, not just text.
        </p>

        <div className="font-semibold text-red-600 mb-2 text-xl sm:text-2xl">A Simple HTML Link Example</div>

        <p>
          In this example, we contain a paragraph instructing users to click on the link labeled{' '}
          <a href="https://www.varcode.in/" className="text-red-500 underline">varcode</a>, which directs to the website "https://www.varcode.in/".
        </p>

        <div className="border border-red-400 text-sm p-2 mt-3 rounded-2xl w-full bg-[#fafafa] overflow-x-auto">
          <CopyBlock
            text={htmlLink1.text}
            language={htmlLink1.language}
            theme={htmlLink1.theme}
            wrapLines
          />
        </div>
      </div>

      <div className="mb-2 mt-6">By default, links will appear as follows in all browsers:</div>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>An <span className="text-red-500 font-medium text-lg">unvisited link</span> is underlined and blue.</li>
        <li>A <span className="text-red-500 font-medium text-lg">visited link</span> is underlined and purple.</li>
        <li>An <span className="text-red-500 font-medium text-lg">active link</span> is underlined and red.</li>
      </ul>

      <div className="text-xl sm:text-2xl text-red-600 font-semibold mb-2">HTML Links - Target Attribute</div>
      <div className="mb-4">
        The <code>target</code> attribute in the <code>&lt;a&gt;</code> tag specifies where to open the linked document.
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 text-red-500 bg-gray-200 font-semibold text-xl px-4 py-3">Attribute</th>
              <th className="border border-gray-300 text-red-500 bg-gray-200 font-semibold text-xl px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3"><code>_blank</code></td>
              <td className="border border-gray-300 p-3">Opens the linked document in a new window or tab.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><code>_self</code></td>
              <td className="border border-gray-300 p-3">Opens in the same frame or window. (Default)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><code>_parent</code></td>
              <td className="border border-gray-300 p-3">Opens in the parent frame.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><code>_top</code></td>
              <td className="border border-gray-300 p-3">Opens in the full window.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><code>framename</code></td>
              <td className="border border-gray-300 p-3">Opens in a specified frame.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        <span className="font-semibold">Example:</span> This example demonstrates how each target value behaves.
      </p>

      <div className="border border-red-400 text-sm p-2 mt-3 rounded-2xl w-full bg-[#fafafa] overflow-x-auto">
        <CopyBlock
          text={htmlLink2.text}
          language={htmlLink2.language}
          theme={htmlLink2.theme}
          wrapLines
        />
      </div>

      <div className="text-xl sm:text-2xl mt-6 font-semibold mb-2 text-red-500">Linking Different HTML Elements</div>

      <div className="mb-4">Here are common ways to link other HTML elements:</div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-[600px] w-full text-left border-collapse  border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4 bg-gray-200 text-red-500 font-semibold text-lg">Element</th>
              <th className="border border-gray-300 p-4 bg-gray-200 text-red-500 font-semibold text-lg">Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Image</td>
              <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="image.jpg"&gt;&lt;img src="image.jpg" alt="Image"&gt;&lt;/a&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Email</td>
              <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="mailto:someone@example.com"&gt;Send Email&lt;/a&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Phone</td>
              <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="tel:+1234567890"&gt;Call Now&lt;/a&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Button</td>
              <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="https://www.example.com"&gt;&lt;button&gt;Visit Example&lt;/button&gt;&lt;/a&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Download</td>
              <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="file.pdf" download&gt;Download File&lt;/a&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Title Attribute</td>
              <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="https://www.example.com" title="Visit Example"&gt;link Text&lt;/a&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-xl sm:text-2xl font-semibold mb-3 text-red-500">Supported Browsers</div>
      <ul className="list-disc list-inside space-y-1 mb-8">
        <li><Link className="text-red-500">Google Chrome</Link> 5.0</li>
        <li><Link className="text-red-500">Edge</Link> 12</li>
        <li><Link className="text-red-500">Mozilla</Link> 4.0</li>
        <li><Link className="text-red-500">Safari</Link> 5.0</li>
        <li><Link className="text-red-500">Opera</Link> 11.1</li>
      </ul>

      <div className="min-h-20 mt-5 w-full  ">
        <div className="flex justify-between items-center ml-5 pb-0 pt-0">
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

export default HTMLHyperlinks;
