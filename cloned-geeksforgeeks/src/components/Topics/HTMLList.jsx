import React from 'react'
import { htmlLists, htmlUnorderedLists, htmlOrderedLists, htmlDescriptionLists } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';

const HTMLList = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML Lists</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>

            <p className='mt-3'>
                An <span className='font-medium'>HTML List</span> allows you to organize data on web pages into an ordered or unordered format
                to make the information easier to read and visually appealing. HTML Lists are very helpful for creating
                structured, accessible content in web development.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-red-600 mb-3">Types of HTML Lists</h2>
            <p>There are three main types of lists in HTML:</p>


            <ol className="list-decimal ml-6 mt-2">
                <li>
                    <span className='font-semibold  text-xl'>Unordered Lists (<code>&lt;ul&gt;</code>)</span>: These lists are used for items that do not need to be in any specific order.
                    The list items are typically marked with bullets.
                </li>
                <li>
                    <span className='font-semibold  text-xl'>Ordered Lists (<code>&lt;ol&gt;</code>)</span>: These lists are used when the order of the items is important.
                    Each item in an ordered list is typically marked with numbers or letters.
                </li>
                <li>
                    <span className='font-semibold  text-xl'>Description Lists (<code>&lt;dl&gt;</code>)</span>: These lists are used to contain terms and their corresponding descriptions.
                </li>
            </ol>

            <h2 className="text-2xl font-semibold text-red-600 mt-6">Basic Example of HTML Lists</h2>

            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlLists.text}
                    language={htmlLists.language}
                    theme={htmlLists.theme}
                    wrapLines
                />
            </div>

            <p className='text-xl font-semibold mt-2 '>Output :</p>
            <div className='flex justify-center flex-col'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210909161745/3.jpg" alt="table border" className='w-[40%] h-[22rem] ml-[29%] hover:cursor-zoom-in' />
                <p className='text-center text-gray-500 italic text-sm'>HTML List</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-4 text-red-600">HTML List Tags</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tag</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { tag: "ul", desc: "Defines an unordered list." },
                        { tag: "ol", desc: "Defines an ordered list." },
                        { tag: "li", desc: "Defines a list item." },
                        { tag: "dl", desc: "Defines a description list." },
                        { tag: "dt", desc: "Defines a term in a description list." },
                        { tag: "dd", desc: "Details the term in a description list." },
                    ].map((item, index) => (
                        <tr key={index} className="border border-gray-300">
                            <td className="border border-gray-300 px-4 py-2">
                                <Link to={`${item.tag}`} className="text-red-500 underline">&lt;{item.tag}&gt;</Link>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-[1rem]">{item.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-2xl text-red-600 font-semibold mt-6 mb-3">Table of Content</h3>
            <ul className="list-disc pl-5 text-red-500">
                <li><a href="#ul" className="underline">1. Using HTML Unordered List or Bulleted List</a></li>
                <li><a href="#ol" className="underline">2. Using HTML Ordered List</a></li>
                <li><a href="#dl" className="underline">3. Using HTML Description List</a></li>
            </ul>
            <div className='mt-6'>
                <p className="text-2xl font-semibold mb-2 text-red-600">1. Using HTML Unordered List or Bulleted List</p>
                <p className="mb-4">
                    Unordered lists are ideal for scenarios where the sequence of the items is not important.
                </p>
                <p className="mb-4">
                    The <a href="#" className="text-red-500 underline">unordered list</a> items are marked with bullets, also known as bulleted lists.
                    An unordered list starts with the &lt;ul&gt; tag, and each list item begins with the &lt;li&gt; tag.
                </p>

                <p className="font-bold mb-2 ">Syntax:</p>
                <pre className="bg-red-100 text-[1rem] p-3 rounded-md">
                    {`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`}
                </pre>

                <p className="font-bold mt-4 ">Attribute:</p>
                <p className="mb-2">This tag contains two attributes which are listed below:</p>
                <ul className="list-disc pl-5">
                    <li>
                        <a href="#" className="text-red-500 underline">compact</a>: It will render the list smaller.
                    </li>
                    <li>
                        <a href="#" className="text-red-500 underline">type</a>: It specifies which kind of marker is used in the list.
                    </li>
                </ul>

                <p className="font-bold mt-4 mb-4 ">Example:</p>
                <p>This example describes the unordered list.</p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlUnorderedLists.text}
                        language={htmlUnorderedLists.language}
                        theme={htmlUnorderedLists.theme}
                        wrapLines
                    />
                </div>

            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mb-2 text-red-600">2. Using HTML Ordered List</p>
                <p className="mb-4">
                    Ordered lists are used when the items need to follow a specific sequence.
                </p>
                <p className="mb-4">
                    In an <a href="#" className="text-red-500 underline">Ordered list</a> all list items are marked with numbers by default. An ordered list starts with the &lt;ol&gt; tag, and each list item begins with the &lt;li&gt; tag.
                </p>

                <p className="font-bold mb-2 ">Syntax:</p>
                <pre className="bg-red-100 text-[1rem] p-3 rounded-md">
                    {`<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>`}
                </pre>

                <p className="font-semibold text-2xl  bold mt-4">Attributes:</p>
                <ul className="list-disc pl-5">
                    <li>
                        <a href="#" className="text-red-500 underline">compact</a>: It defines the list should be compacted (compact attribute is not supported in HTML5. Use CSS instead.).
                    </li>
                    <li>
                        <a href="#" className="text-red-500 underline">reversed</a>: It defines that the order will be descending.
                    </li>
                    <li>
                        <a href="#" className="text-red-500 underline">start</a>: It defines from which number or alphabet the order will start.
                    </li>
                    <li>
                        <a href="#" className="text-red-500 underline">type</a>: It defines which type(1, A, a, I, and i) of the order you want in your list of numeric, alphabetic, or roman numbers.
                    </li>
                </ul>

                <p className="font-bold mt-5 mb-5">Example:</p>
                <p>This example describes the ordered list with the use of reverse, type, and start attribute.</p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlOrderedLists.text}
                        language={htmlOrderedLists.language}
                        theme={htmlOrderedLists.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3 '>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="./htmlOrderedList.jpg" alt="table border" className='w-[30%] h-[20rem] ml-[39%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 italic text-sm'>Ordered List with different list style</p>
                </div>
            </div>

            <div className='mt-5'>
                <p className="text-2xl font-semibold mb-2 text-red-600">3. Using HTML Description List</p>
                <p className="mb-4">
                    A <a href="#" className="text-red-500 underline">description list</a> is a list of terms, with a description of each term. Description lists are less common but very useful for definitions, glossaries, or any other key-value pairs of items.
                </p>
                <p className="mb-4">
                    The &lt;dl&gt; tag defines the description list, the &lt;dt&gt; tag defines the term name, and the &lt;dd&gt; tag describes each term.
                </p>

                <p className="font-bold mb-2 ">Syntax:</p>
                <pre className="bg-red-100 text-[1rem] p-3 rounded-md">
                    {`<dl>
    <dt>Item 1</dt>
    <dd>Description of Item 1</dd>
    <dt>Item 2</dt>
    <dd>Description of Item 2</dd>
</dl>`}
                </pre>

                <p className="mb-4">
                    Here, &lt;dt&gt; (description term) is used for the term being defined, and &lt;dd&gt; (description details) is used for the description.
                </p>

                <p className="font-bold mt-4 ">Example:</p>
                <p>This example describes the HTML Description List.</p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlDescriptionLists.text}
                        language={htmlDescriptionLists.language}
                        theme={htmlDescriptionLists.theme}
                        wrapLines
                    />
                </div>

            </div>

            <p className="text-2xl font-semibold mb-4 mt-4 text-red-600">Best Practices for Using HTML Lists</p>
            <ul className="list-disc pl-5">
                <li>
                    <span className="font-semibold text-xl">Semantic Correctness:</span> Always use the appropriate type of list for your content to ensure semantic correctness and improve accessibility.
                </li>
                <li>
                    <span className="font-semibold text-xl">Nesting Lists:</span> HTML lists can be nested inside one another. For example, you can place an unordered list inside an ordered list item to create a hierarchy.
                </li>
                <li>
                    <span className="font-semibold text-xl">Styling Lists:</span> Use CSS to style lists to match the design of your website. You can change bullet styles in unordered lists, the numbering style in ordered lists, and more.
                </li>
                <li>
                    <span className="font-semibold text-xl">Accessibility:</span> Make sure your lists are accessible. Properly structured lists help screen readers interpret the content accurately, enhancing the accessibility of your website.
                </li>
            </ul>

        </div>
    )
}

export default HTMLList