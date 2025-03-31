import React from 'react'
import { htmlDescriptionListEx1, htmlDescriptionListEx2 } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";


const HTMLDescriptionList = () => {
  return (
    <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
      <h1 className="text-3xl font-semibold mb-2">HTML Description Lists</h1>
      <p className="text-gray-600 text-sm mb-4">Last Updated: 16 Dec, 2024</p>
      <p className="text-lg">
        An <span className='font-semibold'>HTML Description List</span> is not as commonly used as unordered or
        ordered lists but serves an important purpose for displaying
        name-value pairs. This type of list is marked up using three tags: <code>&lt;dl&gt;</code>,
        <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code>.
      </p>
      <ul className="list-disc list-inside my-4">
        <li>
          <span className='font-semibold'>&lt;dl&gt; (Description List):</span> This tag defines the description list
          itself and acts as a container for the list items.
        </li>
        <li>
          <span className='font-semibold'>&lt;dt&gt; (Description Term):</span> Represents a term or a name within
          the list.
        </li>
        <li>
          <span className='font-semibold'>&lt;dd&gt; (Description Details):</span> Provides the description or
          definition of the term.
        </li>
      </ul>
      <p className="text-xl font-semibold mt-6 mb-2">Syntax:</p>
      <pre className="bg-red-100 p-4 text-[1rem ] rounded-md overflow-x-auto">
        {`<dl>
  <dt>Coffee</dt>
  <dd>A hot drink made from roasted coffee beans.</dd>
  <dt>Espresso</dt>
  <dd>Strong coffee brewed with steam through ground beans.</dd>
</dl>`}
      </pre>
      <p className="text-xl font-semibold mt-6 mb-2">HTML Description Lists Examples</p>
      <p className="text-lg font-semibold">Example 1:</p>
      <p className="text-lg">
        In this example, we demonstrate a description list with terms and their descriptions.
      </p>
      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlDescriptionListEx1.text}
          language={htmlDescriptionListEx1.language}
          theme={htmlDescriptionListEx1.theme}
          wrapLines
        />
      </div>

      <p className="text-2xl font-semibold mt-6 mb-2">Nested Description List</p>
      <p className="text-lg">
        A nested description list is when we add a description list inside another description list. This allows for organizing related terms and their definitions in a hierarchical structure, as demonstrated in the example:
      </p>
      <p className="text-lg font-semibold mb-3 mt-3">Example 2:</p>
      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlDescriptionListEx2.text}
          language={htmlDescriptionListEx2.language}
          theme={htmlDescriptionListEx2.theme}
          wrapLines
        />
      </div>

      <p className='font-semibold text-2xl mt-3'>Why Use Description Lists?</p>
      <p className='text-md mt-2'>Description lists are particularly useful for web pages that require definitions or detailed explanations of terms. They help in creating organized, easy-to-read content for:</p>
          <ul className="list-disc ml-8 mt-4">
            <li>FAQs</li>
            <li>Glossaries</li>
            <li>Product descriptions</li>
            <li>Technical specifications</li>
            <li>Any content where terms need definitions</li>
          </ul>
          
    </div>
  )
}

export default HTMLDescriptionList