import React from 'react'
import { htmlCode1, htmlCode2, htmlCode3, htmlCode4, htmlCode5 } from '../../utils/CodeBlocks'
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const HTMLCodeElements = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML Computer Code Elements</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <div className='mt-1'>
                <h1 className="text-2xl text-red-600 font-semibold mb-4">HTML Code Display Elements</h1>
                <p className="mb-4">
                    HTML provides a set of elements tailored for displaying computer code so that it is easily distinguishable from other text on a webpage. These elements help in formatting and presenting source code in a readable and syntactically correct manner.
                </p>

                <h2 className="text-2xl text-red-600 font-semibold mb-2 mt-6">Table of Content</h2>
                <ul className="list-disc list-inside mb-4 ">
                    <li><Link to="/code" >The &lt;code&gt; Tag</Link></li>
                    <li><Link to="/kbd" >The &lt;kbd&gt; Tag</Link></li>
                    <li><Link to="/pre" >The &lt;pre&gt; Tag</Link></li>
                    <li><Link to="/samp" >The &lt;samp&gt; Tag</Link></li>
                    <li><Link to="/var" >The &lt;var&gt; Tag</Link></li>
                </ul>

                <h2 className="text-2xl text-red-600 font-semibold mt-6 mb-2">The &lt;code&gt; Tag</h2>
                <p className="mb-4">
                    <Link to="/code" className="text-red-500 underline">The &lt;code&gt; Tag</Link>  in HTML is designed to display computer code snippets with fixed formatting for optimal readability. It renders the code in a monospace font, preserving the original spacing and layout. The <code>&lt;code&gt;</code> tag also supports both global attributes and event attributes, allowing for flexible styling and interaction.
                </p>

                <h3 className="font-semibold mb-2">Syntax:</h3>
                <div className="bg-red-100 p-4 rounded mb-4">
                    <code>&lt;code&gt; Computer code contents... &lt;/code&gt;</code>
                </div>

                <p className="mb-4">
                    <strong>Note:</strong> The program that is written inside the <code>&lt;code&gt;</code> tag has some different font sizes and font types to the basic heading tag and paragraph tag.
                </p>

                <p> <span className='text-xl font-semibold'>Example :</span>
                    The <code>&lt;code&gt;</code> tag displays a&nbsp;<span className='text-xl font-semibold'>C program within a <code>&lt;pre&gt;</code> tag,</span> preserving whitespace and formatting. The C program includes the stdio.h library and a main function that prints “Hello Geeks”.
                </p>
                <div className="overflow-auto border border-red-400 rounded-2xl p-2 mt-3 w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlCode1.text}
                        language={htmlCode1.language}
                        theme={htmlCode1.theme}
                        wrapLines
                    />
                </div>
            </div>
            <p className='text-2xl font-semibold mt-4'>Output :</p>
            <div className='flex justify-center flex-col'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/code1-1.png" alt="table border" className='lg:w-[40%] lg:h-[12rem] lg:ml-[29%] ml-[15%] hover:cursor-zoom-in' />
                <p className='text-center text-gray-500 italic text-sm'>HTML List</p>
            </div>

            <div className='mt-4'>
                <div className="text-2xl text-red-600 font-semibold mb-3">The &lt;kbd&gt; Tag</div>

                <p className="mb-4">
                    The <Link className='underline text-red-500' to={'/'} >&lt;kbd&gt;</Link> tag is used to define keyboard input. The text between the <code>&lt;kbd&gt;</code> tags represents text that should be typed on a keyboard. This text is typically displayed in the browser's default monospace font, though a richer effect can be achieved with CSS. The <code>&lt;kbd&gt;</code> tag has no specific attributes.
                </p>

                <div className="text-xl font-semibold mb-2">Syntax:</div>

                <div className="bg-red-100 p-4 rounded mb-4">
                    <code>&lt;kbd&gt; Contents... &lt;/kbd&gt;</code>
                </div>

                <div className="font-semibold mb-2">Example:</div>
                <p>
                    To demonstrate the implementation of the <code>&lt;kbd&gt;</code> Tag. The <code>&lt;kbd&gt;</code> tag displays keyboard keys "
                    <kbd>Alt</kbd>", "+", and "<kbd>Tab</kbd>" within the styled text.
                </p>
                <div className="overflow-auto border border-red-400 rounded-2xl p-2 mt-3 w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlCode2.text}
                        language={htmlCode2.language}
                        theme={htmlCode2.theme}
                        wrapLines
                    />
                </div>
                <p className='text-2xl font-semibold mt-4'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240529105456/Elements.png" alt="table border" className='lg:w-[80%] lg:h-[5rem] lg:ml-[5%] ml-[15%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 italic text-sm'>HTML List</p>
                </div>
            </div>

            <div className='mt-4'>
                <div className="text-2xl text-red-600 font-semibold mb-3">The pre Tag</div>

                <p className="mb-4">
                    The <Link className='underline text-red-500' to={'/'} >&lt;pre&gt;</Link>in HTML defines a block of preformatted text, preserving spaces, line breaks, tabs, and other formatting characters that browsers usually ignore. Text within the &lt;pre&gt; element is displayed in a fixed-width font, but this can be changed using CSS. The &lt;pre&gt; tag requires both opening and closing tags.
                </p>

                <div className="text-xl font-semibold mb-4">Syntax:</div>

                <div className="bg-red-100 p-4 rounded mb-4">
                    <code>&lt;pre&gt; Contents... &lt;/pre&gt;</code>
                </div>

                <div className="font-semibold mb-2">Example:</div>
                <p>
                    To demonstrate implementing the <span className='font-semibold'>&lt;pre&gt;</span> Tag in the HTML computer code elements.
                </p>
                <div className="overflow-auto border border-red-400 rounded-2xl p-2 mt-3 w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlCode3.text}
                        language={htmlCode3.language}
                        theme={htmlCode3.theme}
                        wrapLines
                    />
                </div>

            </div>

            <div className='mt-4'>
                <div className="text-2xl text-red-600 font-semibold mb-3">The samp Tag</div>

                <p className="mb-4">
                    The <Link className='underline text-red-500' to={'/'} >&lt;samp&gt; tag</Link> in HTML defines a block of preformatted text, preserving spaces, line breaks, tabs, and other formatting characters that browsers usually ignore. Text within the &lt;pre&gt; element is displayed in a fixed-width font, but this can be changed using CSS. The &lt;pre&gt; tag requires both opening and closing tags.
                </p>

                <div className="text-xl font-semibold mb-4">Syntax:</div>

                <div className="bg-red-100 p-4 rounded mb-4">
                    <code>&lt;samp&gt; Contents... &lt;/samp&gt;</code>
                </div>

                <div className="font-semibold mb-2">Example:</div>
                <p>
                    To demonstrate implementing the <span className='font-semibold'>&lt;pre&gt;</span> Tag in the HTML computer code elements.
                </p>
                <div className="overflow-auto border border-red-400 rounded-2xl p-2 mt-3 w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlCode4.text}
                        language={htmlCode4.language}
                        theme={htmlCode4.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-4'>
                <div className="text-2xl text-red-600 font-semibold mb-3">The var Tag</div>

                <p className="mb-6">
                    The <Link className='underline text-red-500' to={'/'} >&lt;var&gt; tag</Link> is used specifically to highlight programming variables or mathematical expressions, providing context to the text, which is useful for accessibility and search engines. In most browsers, the content of this tag is displayed in italic format.</p>

                <div className="text-xl font-semibold mb-6">Syntax:</div>

                <div className="bg-red-100 p-4 rounded mb-4">
                    <code>&lt;var&gt; Contents... &lt;/var&gt;</code>
                </div>

                <div className="font-semibold mb-2">Example:</div>
                <p>
                    To demonstrate implementing the <span className='font-semibold'>&lt;var&gt;</span> Tag in the HTML computer code elements.
                </p>
                <div className="overflow-auto border border-red-400 rounded-2xl p-2 mt-3 w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlCode5.text}
                        language={htmlCode5.language}
                        theme={htmlCode5.theme}
                        wrapLines
                    />
                </div>
            </div>

            <div className='mt-6'>
                <div className="text-2xl text-red-600 font-semibold mb-4">Quick Summary:</div>

                <table className="lg:w-[60%] w-[99%] text-left border-collapse border border-gray-300 mb-8">
                    <thead>
                        <tr>
                            <th className="border w-[10%] border-gray-300 px-4 py-5">Tag</th>
                            <th className="border border-gray-300 px-4 py-5">Description</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td className="border border-gray-300 px-3 py-4"><code>&lt;code&gt;</code></td>
                            <td className="border border-gray-300 px-3 py-4">Defines a piece of computer code.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-3 py-4"><code>&lt;kbd&gt;</code></td>
                            <td className="border border-gray-300 px-3 py-4">Represents keyboard input, often used to display keys or key combinations.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-3 py-4"><code>&lt;pre&gt;</code></td>
                            <td className="border border-gray-300 px-3 py-4">Displays preformatted text, maintaining its original formatting.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-3 py-4"><code>&lt;samp&gt;</code></td>
                            <td className="border border-gray-300 px-3 py-4">Displays sample output or examples, typically used in computing contexts.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-3 py-4"><code>&lt;var&gt;</code></td>
                            <td className="border border-gray-300 px-3 py-4">Denotes variables, often used to represent placeholders or program entities.</td>
                        </tr>
                    </tbody>
                </table>

                <div className="text-2xl text-red-600 font-semibold mb-2">Supported Browsers</div>
                <ul className="list-disc list-inside">
                    <li>Google Chrome</li>
                    <li>Microsoft Edge</li>
                    <li>Firefox</li>
                    <li>Opera</li>
                    <li>Safari</li>
                </ul>
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

export default HTMLCodeElements