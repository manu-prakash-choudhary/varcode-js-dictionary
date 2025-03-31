import React from 'react'
import { htmlBasicOrderedList, htmlNumberOrderedList, htmlUpperLetterOrderedList, htmlLowerLetterOrderedList, htmlUpperRomanOrderedList, htmlLowerRomanOrderedList, htmlReverseOrderedList, htmlControlList, htmlNestedOrderedList, } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLOrderedList = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold">HTML Ordered Lists</h1>
                <p className="text-gray-500 text-[1rem] mt-3">Last Updated : 25 March, 2025</p>
            </div>

            <p className='mt-4'> <span className="font-semibold text-2xl">HTML Ordered List  </span>
                is created by the HTML <span className='font-semibold'>&lt;ol&gt; tag</span>, to display elements in an ordered form, either numerical or alphabetical.
                Each item within the list is placed within a &lt;li&gt; tag, which stands for “list item”.
            </p>

            <p className="mb-4">
                The list is automatically numbered by the browser, but the style of numbering can be adjusted using attributes and CSS.
            </p>

            <p className="font-bold mb-2">Syntax:</p>
            <pre className="bg-red-100 p-4 text-[1rem] rounded-md">
                {`<ol>
    <li>items1</li>
    <li>items2</li>
    <li>items3</li>
</ol>`}
            </pre>

            <p className="text-2xl font-semibold mt-4">Example – Creating a Basic Ordered List</p>
            <div className="border border-red-400 p-2 text-[1rem] mt-2 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlBasicOrderedList.text}
                    language={htmlBasicOrderedList.language}
                    theme={htmlBasicOrderedList.theme}
                    wrapLines
                />
            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mb-1">HTML Ordered Lists – Type Attribute</p>
                <p>
                    The type attribute of <span className='font-medium'>&lt;ol&gt; tag</span> specifies the order we want to create.
                </p>

                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-100 ">
                            <th className="border border-gray-300 px-4 py-3 text-left">Type</th>
                            <th className="border border-gray-300 px-4 py-3 text-left">Descriptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { type: 'type="1"', desc: 'This will list the items with numbers (default)' },
                            { type: 'type="A"', desc: 'This will list the items in uppercase letters.' },
                            { type: 'type="a"', desc: 'This will list the items in lowercase letters.' },
                            { type: 'type="I"', desc: 'This will list the items with uppercase Roman numbers.' },
                            { type: 'type="i"', desc: 'This will list the items with lowercase Roman numbers.' },
                        ].map((item, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="border border-gray-300 px-4 py-4 font-mono text-[1.1rem]">{item.type}</td>
                                <td className="border border-gray-300 px-4 py-4 text-[1.1rem]">{item.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-2xl font-semibold mt-6 mb-2">1. Number – Ordered List</p>
            <p>
                To create an ordered list in HTML with numerical markers, which is the default behavior for ordered lists,
                you simply use the &lt;ol&gt; (ordered list) tag without specifying a type attribute.
            </p>
            <div className="border border-red-400 p-2 text-[1rem] mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlNumberOrderedList.text}
                    language={htmlNumberOrderedList.language}
                    theme={htmlNumberOrderedList.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl font-semibold mt-6 mb-2">2. Uppercase Letters – Ordered List</p>
            <p>
                To create an ordered list in HTML that uses uppercase letters for the list markers, you can use the type attribute on the  &lt;ol&gt;tag and set it to "A".
            </p>
            <p className='text-2xl font-semibold mt-3'>Example :</p>
            <div className="border border-red-400 p-2 text-[1rem] mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlUpperLetterOrderedList.text}
                    language={htmlUpperLetterOrderedList.language}
                    theme={htmlUpperLetterOrderedList.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl font-semibold mt-6 mb-2">3. Lowercase Letters – Ordered List</p>
            <p>
                To create an ordered list in HTML that uses lowercase letters for the list markers, you can use the type attribute on the &lt;ol&gt;tag and set it to "a".
            </p>
            <p className='text-2xl font-semibold mt-3'>Example :</p>
            <div className="border border-red-400 p-2 text-[1rem] mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlLowerLetterOrderedList.text}
                    language={htmlLowerLetterOrderedList.language}
                    theme={htmlLowerLetterOrderedList.theme}
                    wrapLines
                />
            </div>

            <div className='mt-3'>
                <p className="text-2xl font-semibold mt-6 mb-2">4. Uppercase Roman Numbers – Ordered List</p>
                <p>
                    To create an ordered list in HTML with uppercase Roman numerals as the markers, you can use the type attribute on the  &lt;ol&gt;tag and set it to "I".
                </p>
                <p className='text-2xl font-semibold mt-3'>Example :</p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlUpperRomanOrderedList.text}
                        language={htmlUpperRomanOrderedList.language}
                        theme={htmlUpperRomanOrderedList.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-3'>
                <p className="text-2xl font-semibold mt-6 mb-2">5. Lowercase Roman Numbers – Ordered List</p>
                <p>
                    To create an ordered list in HTML with lowercase Roman numerals as the markers, you can use the type attribute on the &lt;ol&gt;tag and set it to "i".
                </p>
                <p className='text-2xl font-semibold mt-3'>Example :</p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlLowerRomanOrderedList.text}
                        language={htmlLowerRomanOrderedList.language}
                        theme={htmlLowerRomanOrderedList.theme}
                        wrapLines
                    />
                </div>
            </div>
            <div className='mt-3'>
                <p className="text-2xl font-semibold mt-6 mb-2">→ Reverse Ordered List in HTML</p>
                <p>
                    To create a reverse-ordered list in HTML, you can <span className='font-medium'>use the ‘reversed’ attribute in the &lt;ol&gt; tag</span>.
                    This will make the list count down from the highest number.
                </p>

                <p className="font-bold mt-4">Example:</p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlReverseOrderedList.text}
                        language={htmlReverseOrderedList.language}
                        theme={htmlReverseOrderedList.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-3'>
                <p className="text-2xl font-semibold mt-6">→ Control List Counting</p>
                <p>
                    To control list counting, <span className='font-medium'>use the ‘start’ attribute in the &lt;ol&gt; tag</span> to set the starting number for the ordered list.
                </p>

                <p className='mt-3'> <span className="font-semibold mt-2">Example: </span>
                    In this example we showcase an ordered list starting from the number 5, controlled by the “start” attribute within the &lt;ol&gt; tag, customizing list counting.
                </p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlControlList.text}
                        language={htmlControlList.language}
                        theme={htmlControlList.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-3'>
                <p className="text-2xl font-semibold mt-6 mb-2">→ Nested Ordered Lists</p>
                <p>
                    Nested ordered lists <span className='font-semibold'>use &lt;ol&gt; inside &lt;li&gt; tags</span> to create sublists, making content more organized.
                </p>

                <p className="font-bold mt-4">Example:</p>
                <p>
                    In this example we are creating a nested ordered list, listing programming languages with their respective frameworks as subitems.
                </p>
                <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlNestedOrderedList.text}
                        language={htmlNestedOrderedList.language}
                        theme={htmlNestedOrderedList.theme}
                        wrapLines
                    />
                </div>
            </div>
        </div>
    )
}

export default HTMLOrderedList