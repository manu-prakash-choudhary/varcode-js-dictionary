import React from 'react'
import { Link } from 'react-router-dom'
import { htmlLayout1, htmlLayout2, htmlLayout3 } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";

const HTMLLayout = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML Layout</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <p className="mb-4">
                <span className="font-semibold">HTML layouts</span> are a technique used to divide a web page into multiple sections, making it easier to apply styles, organize content, and manage operations efficiently. This division improves readability, accessibility, and overall user experience.
            </p>

            <p className="mb-4">
                HTML layout is achieved through elements like <Link to={'/'} className=' text-red-500' >&lt;header&gt;</Link>, <Link to={'/'} className=' text-red-500' >&lt;nav&gt;</Link>, <Link to={'/'} className=' text-red-500' >&lt;main&gt;</Link>, <Link to={'/'} className=' text-red-500' >&lt;article&gt;</Link>, <Link to={'/'} className=' text-red-500' >&lt;section&gt;</Link>, <Link to={'/'} className=' text-red-500' >&lt;aside&gt;</Link>, and <Link to={'/'} className=' text-red-500' >&lt;footer&gt;</Link> which help organize content, define the page&apos;s sections, and improve SEO.
            </p>

            <div className="border border-gray-400 lg:w-[60%] w-90% lg:ml-30 ml-2">
                <div className="border-b border-gray-400 p-4 text-center">Header Section</div>
                <div className="border-b border-gray-400 p-4 text-center">Navigation Bar</div>
                <div className="flex border-b border-gray-400 h-[6rem]  ">
                    <div className="border-r border-gray-400 pt-8 p-4 w-1/4 text-center">Index</div>
                    <div className="p-4 w-3/4 pt-8 text-center">Content section</div>
                </div>
                <div className="p-4 text-center">Footer Section</div>
            </div>

            <div className="font-semibold mt-4 mb-2">Syntax:</div>
            <div className="bg-red-100 p-3 rounded-lg">
                <code className="text-sm">
                    &lt;header&gt; Content... &lt;/header&gt;
                    <br />
                    &lt;nav&gt; Content... &lt;/nav&gt;
                    <br />
                    &lt;main&gt; Content... &lt;/main&gt;
                    <br />
                    &lt;footer&gt; Content... &lt;/footer&gt;
                </code>
            </div>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlLayout1.text}
                    language={htmlLayout1.language}
                    theme={htmlLayout1.theme}
                    wrapLines
                />
            </div>

            <div className='mt-3'>
                <ul className="list-disc list-inside mb-4">
                    <li><span className='font-semibold' >&lt;header&gt;</span> contains the main heading of the page.</li>
                    <li><span className='font-semibold' >&lt;main&gt;</span> holds the primary content.</li>
                    <li><span className='font-semibold' >&lt;footer&gt;</span> includes the footer information.</li>
                </ul>

                <div className="font-semibold text-2xl mt-6 mb-5 text-red-600 ">Layout Components</div>

                <table className="text-left lg:w-[70%] w-[99%] border-collapse border border-gray-300">
                    <thead>
                        <tr className='font-semibold text-red-600'>
                            <th className="border border-gray-300 px-4 py-4 w-[30%]">Layouts</th>
                            <th className="border border-gray-300 px-4 py-4">Descriptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-5">Header</td>
                            <td className="border border-gray-300 p-5">The top section of a webpage, often containing the website title, logo, or navigation links. The <span className='font-semibold' >&lt;header&gt;</span> tag is used to define this part of the page.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-5">Navigation bar</td>
                            <td className="border border-gray-300 p-5">A menu that provides links to the main sections of the website. The <span className='font-semibold' >&lt;nav&gt;</span> tag is used to define navigation elements in the webpage.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-5">Index / Sidebar</td>
                            <td className="border border-gray-300 p-5">An optional section often found on the side, used for additional content such as ads, links, or other related information.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-5">Content Section</td>
                            <td className="border border-gray-300 p-5">The central area where the primary content of the page is displayed. The &lt;main&gt; tag is used to define the main content of a webpage.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-5">Footer</td>
                            <td className="border border-gray-300 p-5">The bottom section of the webpage, typically containing contact information, legal links, or additional site-related information. The &lt;footer&gt; tag is used to define this area.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-5'>
                <p className='text-xl font-semibold mb-4'>More Examples:</p>
                <p className=' mb-3'>Layout with Additional Semantic Tags</p>

                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlLayout2.text}
                        language={htmlLayout2.language}
                        theme={htmlLayout2.theme}
                        wrapLines
                    />
                </div>
                <ul className="list-disc list-inside mb-4 mt-5">
                    <li><span className='font-semibold' >&lt;nav&gt;</span> provides navigation links for the website.</li>
                    <li><span className='font-semibold' >&lt;section&gt;</span> groups related content, here titled &ldquo;Latest Posts.&rdquo;</li>
                    <li><span className='font-semibold' >&lt;article&gt;</span> represents an individual blog post.</li>
                    <li><span className='font-semibold' >&lt;aside&gt;</span> contains supplementary information, such as an &ldquo;About Me&rdquo; section</li>
                </ul>

                <div className="font-semibold text-xl mt-5 mb-5 text-red-600">Styled Layout with Semantic Tags</div>
                <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlLayout3.text}
                        language={htmlLayout3.language}
                        theme={htmlLayout3.theme}
                        wrapLines
                    />
                </div>
            </div>
            <ul className="list-disc list-inside mb-4 mt-5">
                <li><span className="font-semibold">Header:</span> The <span className='font-medium'>&lt;header&gt;</span> element contains the main heading of the page, providing a clear introduction.</li>
                <li><span className="font-semibold">Main:</span> The <span className='font-medium'>&lt;main&gt;</span> element holds the primary content, ensuring semantic clarity and improved accessibility.</li>
            </ul>

            <div className="font-semibold text-2xl mb-4 mt-2 text-red-600">Techniques for Creating HTML Layouts</div>

            <p className="mb-2">There are several techniques to create multi-column layouts in HTML:</p>

            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">CSS Frameworks (like <Link className='text-red-500 ' to={'/https://getbootstrap.com/docs/5.0/getting-started/introduction/'}>Bootstrap</Link>):</span> Speed up layout design with pre-built components and grid systems.
                </li>
                <li>
                    <span className="font-semibold">CSS Float Property:</span> A classic method for positioning elements, though it requires careful handling to avoid layout issues with normal document flow.
                </li>
                <li>
                    <span className="font-semibold">CSS Flexbox:</span> Ideal for responsive and dynamic layouts, easily adjusting content across different screen sizes.
                </li>
                <li>
                    <span className="font-semibold">CSS Grid:</span> Allows for complex, two-dimensional layouts with ease, providing more control over placement.
                </li>
            </ul>

            <p className="mb-4">
                HTML is the foundation of web pages and is used for webpage development by structuring websites and web apps. You can learn HTML from the ground up by following this <a href="#" className="text-red-500 ">HTML Tutorial</a> and <a href="#" className="text-red-500 ">HTML Examples</a>.
            </p>

            <div className="font-semibold text-2xl mb-4 mt-6 text-red-600">Best Practices for HTML Layout</div>

            <ul className="list-disc list-inside">
                <li>Use semantic HTML5 elements like <span className='font-medium'>&lt;header&gt;</span>, <span className='font-medium'>&lt;nav&gt;</span>, <span className='font-medium'>&lt;main&gt;</span>, and <span className='font-medium'>&lt;footer&gt;</span> to clearly define the structure of your webpage.</li>
                <li>Ensure responsive design by using relative units and media queries to make your layout adaptable to different screen size</li>
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

export default HTMLLayout