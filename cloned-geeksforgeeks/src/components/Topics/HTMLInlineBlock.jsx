import React from 'react'
import { htmlInlineEx1, htmlInlineEx2, htmlInlineEx3 } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HTMLInlineBlock = () => {
    const arr = ["address", "blockquote", "dd", "div", "dl", "dt", "canvas", "form", "heading", "hr", "li", "main", "nav", "noscript", "ol", "pre", "section", "tfoot", "ul", "Tables", "HTML Paragraphs", "Video", "aside", "article", "figcaption", "fieldset", "figure", "footer", "header"];
    const arr2 = ["br", "button", "time", "tt", "var", "a", "abbr", "acronym", "b", "cite", "code", "dfn", "em", "i", "output", "q", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "textarea", "bdo", "big", "img", "input", "kbd", "label", "map", "Object"]
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML Block and Inline Elements</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <p className='mb-3'>
                <span className='font-medium'>HTML Block elements</span>, are used to structure the main content of a webpage. They typically start on a new line and take up the full width of their container examples &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; to &lt;h6&gt;, and &lt;ul&gt;, etc.
            </p>
            <p className='mb-3'>
                On the other hand, <span className='font-medium'>Inline elements</span> are used within block-level elements to style or format specific parts of the content. They don't start on a new line and only take up as much width as necessary for example include &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, and &lt;em&gt;.
            </p>
            <p>
                <span className='font-medium'>Example:</span> This example illustrates the use of the block-level element & inline element.
            </p>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlInlineEx1.text}
                    language={htmlInlineEx1.language}
                    theme={htmlInlineEx1.theme}
                    wrapLines
                />
            </div>

            <p class="mb-4 mt-4">
                In the above example, we have used the <strong class="font-semibold underline">&lt;div&gt;</strong> tag that always starts in a new line & captures the full width available.
                We have used the inline element anchor tag <strong class="font-semibold underline">&lt;a&gt;</strong> that is used to provide a link to a text.
                The inline element doesn't start in a new line & captures only the space around the element.
            </p>

            <p class="text-2xl text-red-600 font-semibold mt-5 mb-3">Block Level Elements:</p>
            <p class="mb-4">
                A block-level element always starts on a new line and stretches out to the left and right as far as it can i.e,
                it occupies the whole horizontal space of its parent element & the height is equal to the content's height.
            </p>

            <p class=" font-semibold mt-5 mb-3 text-2xl text-red-500" >Supported tags:</p>
            {
                arr.map((item, index) => (
                    <ul key={index} class="list-disc pl-5 hover:underline ">
                        <li class="mb-2"> <Link to={`/html/tags/${item}`}>&lt;{item}&gt; Tag</Link></li>
                    </ul>
                ))
            }
            <p class="text-2xl text-red-600 font-semibold mt-5 mb-3">div element:</p>
            <p class="mb-4">
                The <strong class="font-semibold">&lt;div&gt;</strong> element is used as a container for other HTML elements. It has no required attributes.
                <span class="italic">Style</span>, <span class="italic">class</span>, and <span class="italic">id</span> are the commonly used attributes.
            </p>

            <p class="text-lg font-semibold mt-5 mb-3">Syntax:</p>
            <div class="bg-red-100 p-5 rounded-lg font-mono whitespace-pre-wrap mb-4">
                &lt;div&gt;varcode&lt;/div&gt;
            </div>

            <p class="font-semibold mt-5">Example:</p>
            <p>The below code illustrates the implementation of &lt;div&gt; tag.</p>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlInlineEx2.text}
                    language={htmlInlineEx2.language}
                    theme={htmlInlineEx2.theme}
                    wrapLines
                />
            </div>

            <p class="text-2xl text-red-600 font-semibold mt-5 mb-3">Inline Elements:</p>
            <p class="mb-4">
                An inline element is the opposite of the block-level element. It does not start on a new line and takes up only the necessary width ie., it only occupies the space bounded by the tags defining the HTML element, instead of breaking the flow of the content.
            </p>
            <p className='text-2xl text-red-600 font-semibold mb-3'>Supported tags:</p>
            {
                arr2.map((item, index) => (
                    <ul key={index} class="list-disc pl-5 ">
                        <li class="mb-2"> <Link to={`/html/tags/${item}`}>&lt;{item}&gt; Tag</Link></li>
                    </ul>
                ))
            }

            <p class="text-2xl text-red-600 font-semibold mt-5 mb-3">span element:</p>
            <p class="mb-4">
                The &lt;span&gt; tag is used as a container for text. It has no required attributes. <span className='italic'>Style, class, and id</span> are the commonly used attributes.
            </p>
            <p class="text-lg font-semibold mt-5 mb-3">Syntax:</p>
            <div class="bg-red-100 p-5 rounded-lg font-mono whitespace-pre-wrap mb-4">
                &lt;span&gt;varcode&lt;/sapn&gt;
            </div>

            <p class="font-medium mt-5"><span className='text-2xl '>Example:</span> The below code illustrates the implementation of &lt;div&gt; tag.</p>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlInlineEx3.text}
                    language={htmlInlineEx3.language}
                    theme={htmlInlineEx3.theme}
                    wrapLines
                />
            </div>
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
    )
}

export default HTMLInlineBlock

