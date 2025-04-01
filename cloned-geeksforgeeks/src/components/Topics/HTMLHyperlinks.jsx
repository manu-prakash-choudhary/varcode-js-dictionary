import React from 'react'
import { htmlLink1, htmlLink2 } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';

const HTMLHyperlinks = () => {
  return (
    <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
      <div className='border-b pb-3 mb-3 border-gray-200 '>
        <h1 className="text-3xl text-red-600 font-semibold">HTML Links Hyperlinks</h1>
        <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
      </div>
      <div className='mt-6'>
        <p className="mb-4">
          HTML Links, also known as <span className='font-medium'>hyperlinks</span>, are defined by the <code>&lt;a&gt;</code> tag in HTML, which stands for "anchor". These links are essential for navigating between web pages and directing users to different sites, documents, or sections within the same page.
        </p>

        <p className="mb-4">
          The basic attributes of the <code>&lt;a&gt;</code> tag include <code>href</code>, <code>title</code>, and <code>target</code>, among others.
        </p>

        <div className="font-semibold text-red-600 mb-2 text-2xl">Basic Syntax of an HTML Link:</div>

        <div className="bg-red-100 p-4 rounded mb-4">
          <code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code>
        </div>

        <p className="mb-4">
          <strong>Note:</strong> A hyperlink can be represented by an image or any other HTML element, not just text.
        </p>

        <div className="font-semibold text-red-600 mb-2 text-2xl">A Simple HTML Link Example</div>

        <p>
          In this example, we contains a paragraph instructing users to click on the link labeled <a href="https://www.varcode.in/" className="text-red-500 underline">varcode</a>, which directs to the website "https://www.varcode.in/".
        </p>

        <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
          <CopyBlock
            text={htmlLink1.text}
            language={htmlLink1.language}
            theme={htmlLink1.theme}
            wrapLines
          />
        </div>
      </div>
      <div className="mb-2 mt-5">
        By default, links will appear as follows in all browsers:
      </div>

      <ul className="list-disc list-inside mb-8">
        <li>An <span className="text-red-500 underline font-medium text-xl">unvisited link</span> is underlined and blue.</li>
        <li>A <span className="text-red-500 underline font-medium text-xl ">visited link</span> is underlined and purple.</li>
        <li>An <span className="text-red-500 underline font-medium text-xl ">active link</span> is underlined and red.</li>
      </ul>

      <div className="text-2xl text-red-600 font-semibold mb-2">HTML Links - Target Attribute</div>

      <div className="mb-4">
        The <code>target</code> attribute in the <code>&lt;a&gt;</code> tag specifies where to open the linked document. It controls whether the link opens in the same window, a new window, or a specific frame.
      </div>

      <table className="w-[60%] text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 text-red-500 bg-gray-200 font-semibold text-2xl px-4 py-5">Attribute</th>
            <th className="border border-gray-300 text-red-500 bg-gray-200 font-semibold text-2xl px-4 py-5">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 py-4"><code>_blank</code></td>
            <td className="border border-gray-300 p-2 py-4">Opens the linked document in a new window or tab.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 py-4"><code>_self</code></td>
            <td className="border border-gray-300 p-2 py-4">Opens the linked document in the same frame or window as the link. (Default behavior)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 py-4"><code>_parent</code></td>
            <td className="border border-gray-300 p-2 py-4">Opens the linked document in the parent frame.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 py-4"><code>_top</code></td>
            <td className="border border-gray-300 p-2 py-4">Opens the linked document in the full body of the window.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 py-4"><code>framename</code></td>
            <td className="border border-gray-300 p-2 py-4">Opens the linked document in a specified frame. The frame's name is specified in the attribute.</td>
          </tr>
        </tbody>
      </table>
      <p className='mt-4'><span className='font-semibold'>Example :</span> In this example we demonstrates the use of target attributes in links. Each link opens in a different context: _blank opens in a new window or tab, _self in the same frame, _parent in the parent frame, _top in the full window body, and framename in a specified frame.</p>
      <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlLink2.text}
          language={htmlLink2.language}
          theme={htmlLink2.theme}
          wrapLines
        />
      </div>
      <div className="text-2xl mt-5 font-semibold mb-2 text-red-500">Linking Different HTML Elements</div>

      <div className="mb-4">
        Below are examples of how to link different HTML elements with their respective code snippets
      </div>

      <table className="w-full text-left border-collapse border border-gray-300 mb-8">
        <thead>
          <tr>
            <th className="border border-gray-300 p-5 bg-gray-200 text-red-500 font-semibold text-xl">Element to Interlink</th>
            <th className="border border-gray-300 p-5 bg-gray-200 text-red-500 font-semibold text-xl">Specific Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Linking to an Image</td>
            <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="image.jpg"&gt;&lt;img src="image.jpg" alt="Image"&gt;&lt;/a&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Link to an Email Address</td>
            <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="mailto:someone@example.com"&gt;Send Email&lt;/a&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Phone Number</td>
            <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="tel:+1234567890"&gt;Call Now&lt;/a&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Button</td>
            <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="https://www.example.com"&gt;&lt;button&gt;Visit Example&lt;/button&gt;&lt;/a&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Link to Download File</td>
            <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="file.pdf" download&gt;Download File&lt;/a&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Link Title</td>
            <td className="border border-gray-300 px-4 py-3"><code>&lt;a href="https://www.example.com" title="Visit Example"&gt;link Text&lt;/a&gt;</code></td>
          </tr>
        </tbody>
      </table>

      <div className="text-2xl font-semibold mb-2 text-red-500">Supported Browsers</div>

      <ul className="list-disc list-inside">
        <li><Link className='text-red-500 underline'>Google Chrome</Link>5.0</li>
        <li><Link className='text-red-500 underline'>Edge </Link>12 </li>
        <li><Link className='text-red-500 underline'>Mozilla </Link>4.0 </li>
        <li><Link className='text-red-500 underline'>Safari </Link>5.0 </li>
        <li><Link className='text-red-500 underline'>Opera </Link>11.1 </li>
      </ul>
    </div>
  )
}

export default HTMLHyperlinks