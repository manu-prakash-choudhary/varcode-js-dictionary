import React from 'react'
import { htmlSemanticArticle, htmlSemanticAside, htmlSemanticDetails, htmlSemanticFigure, htmlSemanticHeader, htmlSemanticFooter, htmlSemanticMain, htmlSemanticSection, htmlSemanticNav, htmlSemanticMark } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";

const HTMLSemantic = () => {
    const arr = ["article", "aside", "details", "figcaption", "figure", "footer", "header", "main", "mark", "nav", "section"]
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML5 Semantics</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <div className="mb-4">
                HTML5 introduced a range of semantic elements that clearly describe their purpose in human and machine-readable language. Unlike non-semantic elements, which provide no information about their content, semantic elements clearly define their content.
            </div>
            <div className="mb-4">
                For instance, <span className='font-semibold'>&lt;form&gt;</span>, <span className='font-semibold'>&lt;table&gt;</span>, and <span className='font-semibold'>&lt;article&gt;</span> tags clearly define the content and purpose, to the browser.
            </div>

            <div className="text-2xl font-semibold mb-2 text-red-600">Why Use Semantic HTML Tags?</div>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className=' font-semibold'>Accessibility:</span> Semantic elements make web pages more accessible. Screen readers and other assistive technologies can interpret the structure and navigate the content more efficiently.
                </li>
                <li>
                    <span className=' font-semibold'>SEO:</span> Better structured data leads to better SEO. Search engines prioritize well-structured content that uses semantic elements correctly, as it's easier to index.
                </li>
                <li>
                    <span className=' font-semibold'>Maintainability:</span> Semantic HTML helps create a logically structured document, which is easier to read and maintain.
                </li>
            </ul>

            <div className="text-2xl font-semibold mt-6 mb-2 text-red-600">Semantic Elements</div>
            <div className="mb-4">
                Here are some of the fundamental HTML5 semantic elements that you should use to structure your web content:
            </div>

            <ol className="list-decimal list-inside">
                {arr.map((item, index) => (
                    <li key={index}>
                        <span className='text-red-500 hover:underline hover:cursor-pointer'>&lt;{item}&gt;</span>
                    </li>
                ))}
            </ol>
            <div className='lg:w-[50%] lg:ml-[30%] w-[90%] ml-[5%] mt-2'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241127115416984900/html-sementics-layout.png" alt="" />
            </div>

            <div className='mt-6'>
                <p className='text-2xl font-semibold mb-2 text-red-600'>1. The &lt;article&gt; Tag</p>
                <p>The <span className='font-semibold'>&lt;article&gt;</span> tag is used for content that stands alone and can be independently distributed or reused, such as a blog post or news article.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticArticle.text}
                        language={htmlSemanticArticle.language}
                        theme={htmlSemanticArticle.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>2. The &lt;aside&gt; Tag</p>
                <p>It is used to place content in a sidebar i.e. aside from the existing content. It is related to surrounding content.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticAside.text}
                        language={htmlSemanticAside.language}
                        theme={htmlSemanticAside.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>3. The Details and Summary Tag</p>
                <p>The “details” defines additional details that the user can hide or view. “summary” defines a visible heading for a “details” element.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticDetails.text}
                        language={htmlSemanticDetails.language}
                        theme={htmlSemanticDetails.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>4. The Figure and Figcaption Tag</p>
                <p>These are used to add an image to a web page with a small description.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticFigure.text}
                        language={htmlSemanticFigure.language}
                        theme={htmlSemanticFigure.theme}
                        wrapLines
                    />
                </div>
            </div>
            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>5. The Header Tag</p>
                <p>As the name suggests, it is for the header of a section introductory of a page. There can be multiple headers on a page.  </p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticHeader.text}
                        language={htmlSemanticHeader.language}
                        theme={htmlSemanticHeader.theme}
                        wrapLines
                    />
                </div>
            </div>
            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>6. The Footer Tag</p>
                <p>Footer located at the bottom of any article or document, they can contain contact details, copyright information etc. There can be multiple footers on a page.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticFooter.text}
                        language={htmlSemanticFooter.language}
                        theme={htmlSemanticFooter.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>7. The Main Tag</p>
                <p>It defines the main content of the document. The content inside the main tag should be unique. </p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticMain.text}
                        language={htmlSemanticMain.language}
                        theme={htmlSemanticMain.theme}
                        wrapLines
                    />
                </div>
            </div>
            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>8. The Section Tag</p>
                <p>A page can be split into sections like Introduction, Contact Information, Details, etc and each of these sections can be in a different section tag.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticSection.text}
                        language={htmlSemanticSection.language}
                        theme={htmlSemanticSection.theme}
                        wrapLines
                    />
                </div>
            </div>
            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>9. The nav Tag</p>
                <p>It is used to define a set of navigation links in the form of a navigation bar or nav menu.</p>
                <p className='text-2xl font-semibold mt-4'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticNav.text}
                        language={htmlSemanticNav.language}
                        theme={htmlSemanticNav.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-6'>
                <p className='text-2xl text-red-600 font-semibold mb-2'>10. The Mark Tag</p>
                <p>It is used to highlight the text.</p>
                <p className='text-2xl font-semibold mt-2'>Example :</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlSemanticMark.text}
                        language={htmlSemanticMark.language}
                        theme={htmlSemanticMark.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className="text-2xl text-red-600 mt-5 font-semibold mb-4">Best Practices for Using HTML5 Semantic Elements</div>

            <ul className="list-disc list-inside mb-8">
                <li>
                    <span className='font-semibold'>Do not overuse &lt;div&gt;:</span> Use semantic elements where appropriate instead of non-semantic &lt;div&gt; elements to provide more specific information about the content.
                </li>
                <li>
                    <span className='font-semibold'>Structure content logically:</span> Organize the content within semantic elements to reflect the meaning and importance of the information.
                </li>
                <li>
                    <span className='font-semibold'>Validate your HTML:</span> Use tools like the W3C HTML Validator to ensure that your use of semantic elements adheres to HTML5 standards.
                </li>
            </ul>

            <div className="text-2xl text-red-600 font-semibold mb-2">Supported Browsers</div>

            <ul className="list-disc list-inside">
                <li className='font-semibold'>Google Chrome: 1</li>
                <li className='font-semibold'>Edge: 12</li>
                <li className='font-semibold'>Mozilla: 1</li>
                <li className='font-semibold'>Opera: 15</li>
                <li className='font-semibold'>Safari: 4</li>
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
    )
}

export default HTMLSemantic