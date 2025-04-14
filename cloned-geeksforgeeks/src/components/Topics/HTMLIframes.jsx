import React from 'react';
import { htmlIframeEx1, htmlIframeEx2, htmlIframeEx3, htmlIframeEx4, htmlIframeEx5 } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const HTMLIframes = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML Iframes</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>

            <p className="mb-4">
                An Iframe, or Inline Frame, is an HTML element represented by the
                <code className="bg-gray-100 p-1 rounded">&lt;iframe&gt;</code> tag. It functions as a 'window' on your webpage through which visitors can view and interact with another webpage from a different source.
            </p>

            <p className="mb-4">
                Iframes are used for various purposes like:
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Embedding Multimedia:</span> Easily integrate videos, audio, or animations from platforms like YouTube, etc.
                </li>
                <li>
                    <span className="font-semibold">Including Maps:</span> Embed maps from services like Google Maps directly into your site.
                </li>
                <li>
                    <span className="font-semibold">Loading Forms and Widgets:</span> Incorporate forms or widgets from other sources without writing complex code.
                </li>
            </ul>

            <p className="font-semibold text-2xl text-red-600 mb-2">Syntax:</p>
            <div className="bg-red-100 p-3 rounded-lg mb-4">
                <code className="text-sm">
                    &lt;iframe src="URL" title="description"&gt;&lt;/iframe&gt;
                </code>
            </div>

            <ul className="list-disc list-inside mb-4">
                <li>
                    The <span className='font-semibold' >src</span> attribute specifies the <span className="font-semibold">URL</span> of the document you want to embed.
                </li>
                <li>
                    Iframes can include <span className="font-semibold">videos</span>, <span className="font-semibold">maps</span>, or <span className="font-semibold">entire web pages</span> from other sources.
                </li>
            </ul>

            <h2 className="text-2xl text-red-600 font-semibold mb-4 mt-6">HTML Iframes Examples</h2>

            <h3 className="text-lg font-semibold mb-4">Example 1: Basic Iframe Embedding</h3>

            <p>
                In this example, an iframe is used to display another webpage within the current webpage.
            </p>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlIframeEx1.text}
                    language={htmlIframeEx1.language}
                    theme={htmlIframeEx1.theme}
                    wrapLines
                />
            </div>
            <p className='font-semibold text-2xl mt-3'>In this example: </p>
            <ul className="list-disc list-inside mb-4 mt-2">
                <li>
                    <span className="font-semibold">src:</span> Specifies the URL of the page to display within the iframe.
                </li>
                <li>
                    <span className="font-semibold">width and height:</span> Defines the size of the iframe on your page.
                </li>
            </ul>

            <div className="font-semibold text-2xl text-red-600 mb-2">Supported Attributes of the &lt;iframe&gt; Tag</div>

            <table className="w-full mt-4 text-left border-collapse border border-gray-300">
                <thead >
                    <tr>
                        <th className="border text-2xl font-semibold border-gray-300 px-4 py-3">Attributes</th>
                        <th className="border text-2xl font-semibold border-gray-300 px-4 py-3">Description</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className="border border-gray-300 px-4 py-3">allow</td>
                        <td className="border border-gray-300 px-4 py-3">Specifies a set of extra restrictions on the content that can be loaded in an &lt;iframe&gt;.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-3">allowfullscreen</td>
                        <td className="border border-gray-300 px-4 py-3">Indicates whether the &lt;iframe&gt; can be displayed in fullscreen mode.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-3">allowpaymentrequest</td>
                        <td className="border border-gray-300 px-4 py-3">Enables payment requests for content inside the &lt;iframe&gt;.</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline  border-gray-300 px-4 py-3"><Link to={'/'}>height</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Sets the height of the &lt;iframe&gt; element.</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"><Link to={'/'}>width</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Sets the width of the &lt;iframe&gt; element.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-3">loading</td>
                        <td className="border border-gray-300 px-4 py-3">Specifies how the content of the &lt;iframe&gt; should be loaded.</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"> <Link to={'/'}>scrolling</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Controls whether or not the &lt;iframe&gt; should have scrollbars.</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"><Link to={'/'}>name</Link> </td>
                        <td className="border border-gray-300 px-4 py-3">Specifies the name of the &lt;iframe&gt; for targeting its content or for referencing it in JavaScript.</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"><Link to={'/'}>referrerpolicy</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Sets the referrer policy for the &lt;iframe&gt; content.</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"><Link to={'/'}>sandbox</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Specifies an extra set of restrictions for the content in the &lt;iframe&gt;</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"><Link to={'/'}>src</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Specifies the URL of the document to embed in the &lt;iframe&gt;</td>
                    </tr>
                    <tr>
                        <td className="border text-red-500 underline border-gray-300 px-4 py-3"><Link to={'/'}>srcdoc</Link></td>
                        <td className="border border-gray-300 px-4 py-3">Specifies the HTML content of the page to display in the &lt;iframe&gt;</td>
                    </tr>
                </tbody>
            </table>

            <div className="font-semibold text-xl mb-4 mt-4 text-red-600">Example 2: Using Height and Width attribute</div>
            <p className="mb-4">
                The height and width attributes are used to specify the size of the iframe. The attribute values are specified in pixels by default. You can use pixels or percentages (e.g., &ldquo;80%&rdquo;).
            </p>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlIframeEx2.text}
                    language={htmlIframeEx2.language}
                    theme={htmlIframeEx2.theme}
                    wrapLines
                />
            </div>

            <div className="font-semibold text-xl mb-4 mt-4 text-red-600">Example 3: Removing Borders from Iframe</div>
            <p className="mb-4">
                By default, iframe has a border around it. To remove the border, we must use the style attribute and use the <Link to={'/'} className='underline text-red-500'>CSS border property</Link>.</p>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlIframeEx3.text}
                    language={htmlIframeEx3.language}
                    theme={htmlIframeEx3.theme}
                    wrapLines
                />
            </div>

            <div className="font-semibold text-xl mb-4 mt-4 text-red-600">Example 4: Styling Iframe Border Using CSS</div>
            <p className="mb-4">
                You can change the size, style, and color of the iframe border using CSS.
            </p>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlIframeEx4.text}
                    language={htmlIframeEx4.language}
                    theme={htmlIframeEx4.theme}
                    wrapLines
                />
            </div>

            <div className="font-semibold text-xl mb-4 mt-4 text-red-600">Example 5: Iframe Target in Link</div>
            <p className="mb-4">
                You can target an iframe with links by using the name attribute of the iframe and the target attribute of the link.
            </p>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlIframeEx5.text}
                    language={htmlIframeEx5.language}
                    theme={htmlIframeEx5.theme}
                    wrapLines
                />
            </div>

            <div className="font-semibold text-2xl text-red-600 mb-2 mt-5">Best Practices for Using Iframes</div>

            <p className="mb-4">
                While iframes offer significant flexibility, they should be used wisely to ensure they enhance rather than detract from the user experience.
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Security:</span> Always use the <code >sandbox</code> attribute to restrict the iframe’s capabilities unless you fully trust the content. This can prevent malicious scripts from running.
                </li>
                <li>
                    <span className="font-semibold">Performance:</span> Iframes can slow down your page loading times. Only use them when necessary and ensure the embedded content is optimized for fast loading.
                </li>
                <li>
                    <span className="font-semibold">Accessibility:</span> Provide alternative content for users who might not be able to interact with iframes. This can be done by placing text or links inside the <code >&lt;iframe&gt;</code> tags, which will only display if iframes are not supported.
                </li>
            </ul>

            <div className="font-semibold text-2xl text-red-600 mb-2">Supported Browsers</div>

            <ul className="list-disc list-inside">
                <li><Link className=' text-red-500'>Google Chrome</Link></li>
                <li><Link className=' text-red-500'>Edge</Link></li>
                <li><Link className=' text-red-500'>Firefox</Link></li>
                <li><Link className=' text-red-500'>Opera</Link></li>
                <li><Link className=' text-red-500'>Safari</Link></li>
            </ul>
            <div className="min-h-20 mt-5  w-full">
                <div className="flex justify-between items-center p-20 pb-0 pt-0">
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

export default HTMLIframes