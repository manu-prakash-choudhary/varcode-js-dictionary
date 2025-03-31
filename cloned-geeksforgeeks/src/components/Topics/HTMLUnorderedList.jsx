import React from 'react'
import { htmlUnorderedListEx1, htmlUnorderedListEx2, htmlUnorderedListEx3, htmlUnorderedListEx4, htmlNestedUnorderedList, htmlHorizontalUnorderedList, } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLUnorderedList = () => {
  return (
    <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
      <div className='border-b pb-3 border-gray-200 '>
        <h1 className="text-3xl font-semibold">HTML Unordered Lists</h1>
        <p className="text-gray-500 text-[1rem] mt-2">Last Updated : 25 March, 2025</p>
      </div>
      <p className="mt-4">
        An <span className='font-medium'>HTML Unordered List</span> is defined with the <code>&lt;ul&gt;</code> tag, where
        “ul” stands for “unordered list.” Each item within the list is marked by a <code>&lt;li&gt;</code> tag,
        standing for “list item.”
      </p>
      <p className="mt-2">
        The items in an unordered list are typically displayed with bullet points, which can be styled
        or changed using CSS.
      </p>
      <h2 className="font-bold mt-4 mb-2">Syntax:</h2>
      <div className="bg-red-100 p-4 rounded">
        <pre>
          {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`}
        </pre>
      </div>
      <h2 className="text-2xl font-semibold mt-6">HTML Unordered Lists Examples</h2>
      <p className="mt-2">Below are some examples showing the use of HTML Unordered lists.</p>
      <h3 className="font-bold mt-4">Example 1:</h3>
      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlUnorderedListEx1.text}
          language={htmlUnorderedListEx1.language}
          theme={htmlUnorderedListEx1.theme}
          wrapLines
        />
      </div>

      <p className=' text-xl font-semibold mt-3'>Output :</p>
      <div className='flex justify-center flex-col'>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240314175256/HTML-Unordered-Lists.png" alt="table border" className='w-[30%] h-[15rem] ml-[39%] hover:cursor-zoom-in' />
        <p className='text-center text-gray-500 italic text-sm'>Output</p>
      </div>

      <div className='mt-1'>
        <p className="text-2xl font-semibold mt-6">HTML Unordered Lists Examples</p>
        <p className="mt-2">Below are some examples showing the use of HTML Unordered lists.</p>
        <p className="font-semibold mt-4">Example 1:</p>
        <p className="text-2xl font-semibold mt-4">Unordered Lists Style Types</p>
        <table className="w-[50%] ml-[20%] border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-4 font-semibold">Values</th>
              <th className="border border-gray-300 px-2 py-4 font-semibold">Descriptions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-4">disc</td>
              <td className="border border-gray-300 px-3 py-4">This value sets the list marker to a bullet (default).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-4">circle</td>
              <td className="border border-gray-300 px-3 py-4">This value sets the list marker to a circle.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-4">square</td>
              <td className="border border-gray-300 px-3 py-4">This value sets the list marker to a square.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-4">none</td>
              <td className="border border-gray-300 px-3 py-4">This value unmarks the list of items.</td>
            </tr>
          </tbody>
        </table>
        <p className='mt-4'>
          <span className="mt-4 font-bold">Example 2 : </span>
          Implementation of <span className='font-medium'>list style type to square</span> in unordered lists.
        </p>

        <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
          <CopyBlock
            text={htmlUnorderedListEx2.text}
            language={htmlUnorderedListEx2.language}
            theme={htmlUnorderedListEx2.theme}
            wrapLines
          />
        </div>
        <p className=' text-xl font-semibold mt-3'>Output :</p>
        <div className='flex justify-center flex-col'>
          <img src="./SquareUnorder.jpg" alt="table border" className='w-[40%] h-[15rem] ml-[39%] hover:cursor-zoom-in' />
          <p className='text-center text-gray-500 italic text-sm'>Output</p>
        </div>
      </div>

      <p className='mt-4'>
        <span className="mt-4 font-bold">Example 3 : </span>
        Implementation of <span className='font-medium'>list style type to Circle</span> in unordered lists.
      </p>

      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlUnorderedListEx3.text}
          language={htmlUnorderedListEx3.language}
          theme={htmlUnorderedListEx3.theme}
          wrapLines
        />
      </div>
      <p className=' text-xl font-semibold mt-1'>Output :</p>
      <div className='flex justify-center flex-col'>
        <img src="./CircleUnorder.jpg" alt="table border" className='w-[50%] h-[15rem] ml-[39%] hover:cursor-zoom-in' />
        <p className='text-center text-gray-500 italic text-sm'>Output</p>
      </div>

      <p className='mt-6'>
        <span className="mt-4 font-bold">Example 4 : </span>
        Implementation of <span className='font-medium'>list style type to None</span> in unordered lists.
      </p>

      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlUnorderedListEx4.text}
          language={htmlUnorderedListEx4.language}
          theme={htmlUnorderedListEx4.theme}
          wrapLines
        />
      </div>
      <p className=' text-xl font-semibold mt-3'>Output :</p>
      <div className='flex justify-center flex-col'>
        <img src="./NoneUnorder.jpg" alt="table border" className='w-[50%] h-[15rem] ml-[39%] hover:cursor-zoom-in' />
        <p className='text-center text-gray-500 italic text-sm'>Output</p>
      </div>

      <p className="mt-6 text-2xl font-semibold">-&gt; Nested Unordered List</p>
      <p className="mt-2">
        An Unordered List can be nested, i.e., the list can be defined inside of another list.
      </p>
      <p className="font-semibold mt-4">Example:</p>
      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlNestedUnorderedList.text}
          language={htmlNestedUnorderedList.language}
          theme={htmlNestedUnorderedList.theme}
          wrapLines
        />
      </div>
      <p className=' text-xl font-semibold mt-3'>Output :</p>
      <div className='flex justify-center flex-col'>
        <img src="./NestedUnorder.jpg" alt="table border" className='w-[40%] h-[25rem] ml-[39%] hover:cursor-zoom-in' />
        <p className='text-center text-gray-500 italic text-sm'>Output</p>
      </div>

      <p className="mt-6 text-2xl font-semibold">-&gt; Horizontal Unordered List</p>
      <p className="mt-2">
        An Unordered list can also be aligned in the Horizontal manner, which acts similar to the Nav bar.
      </p>
      <p className="font-semibold mt-4">Example: <span className='font-normal'>Implementation of Unordered List horizontally.</span></p>
      <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlHorizontalUnorderedList.text}
          language={htmlHorizontalUnorderedList.language}
          theme={htmlHorizontalUnorderedList.theme}
          wrapLines
        />
      </div>
      <p className=' text-xl font-semibold mt-3'>Output :</p>
      <div className='flex justify-center flex-col'>
        <img src="./HorizontalList.jpg" alt="table border" className='w-full h-[8rem]  hover:cursor-zoom-in' />
        <p className='text-center text-gray-500 italic text-sm'>Output</p>
      </div>

      <p className='text-2xl font-semibold mt-6 mb-2'>
        Use Cases of Unordered Lists
      </p>
      <p>Unordered lists are incredibly versatile. Here are some common use cases:</p>
      <ul className='mt-3'>
        <li>
          <span className='font-semibold'>Navigation Menus:</span> Many web designers use unordered lists to structure horizontal and vertical navigation menus.
        </li>
        <li>
          <span className='font-semibold'>Product Features:</span> Highlighting product features in bullet points for easy scanning.
        </li>
        <li>
          <span className='font-semibold'>Content Breakdown:</span> Breaking down complex content into bullet points to improve comprehension.
        </li>
      </ul>

    </div>
  )
}

export default HTMLUnorderedList