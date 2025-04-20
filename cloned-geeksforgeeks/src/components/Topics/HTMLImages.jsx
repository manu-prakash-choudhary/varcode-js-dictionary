import React from 'react';
import { htmlImage, htmlImagetag, htmlImageSetSize, htmlImageAddTitle, htmlStyleImage, htmlImageAlignment, htmlAddImageLink, htmlAddingAnimatedImage } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import HTMLAttribute from "../../utils/HTMLAttribute";

const HTMLImages = () => {
    return (
        <div className="content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide">
            <div className='border-b border-gray-200'>
                <h1 className="text-3xl font-semibold mb-3 text-red-500">HTML Images</h1>
                <p className="text-gray-500  mb-4">Last Updated &#58; 22 March&#44; 2025</p>
            </div>

            <div className=" mt-4">
                <p className=" text-gray-700 ">
                    The <span className='font-semibold'>HTML &lt;img&gt; tag</span> is used to embed an image in web pages by linking them. It creates a placeholder for the image, defined by attributes like <code>src</code>, <code>width</code>, <code>height</code>, and <code>alt</code>, and does not require a closing tag.
                </p>
                <div className="mt-4">
                    <p className="">There are <span className='font-semibold'>two ways</span> to insert images into a webpage:</p>
                    <ul className='list-disc pl-8 text-gray-700  mt-2'>
                        <li>By providing a full path or address (URL) to access an internet file.</li>
                        <li>By providing the file path relative to the location of the current web page file.</li>
                    </ul>
                </div>
            </div>

            <p className="text-xl font-semibold text-gray-800 mt-5 text-red-500">Basic Example of the &lt;img&gt; Tag&#58;</p>
            <div className="overflow-auto border border-red-400 p-2 mt-5 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlImage.text}
                    language={htmlImage.language}
                    theme={htmlImage.theme}
                    wrapLines
                />
            </div>

            <div className="bg-gray-50 p-2 pl-4 rounded-md mt-6 border-l-4 border-red-400">
                <p className="font-semibold text-red-500">In this example:</p>
                <ul className='list-disc pl-8 text-gray-700  mt-2'>
                    <li>The <span className="font-semibold ">&lt;img&gt; tag</span> is used to embed an image into the webpage.</li>
                    <li><span className=" font-semibold">src attribute:</span> Specifies the source URL of the image.</li>
                    <li><span className=" font-semibold">alt attribute:</span> Provides alternative text for the image.</li>
                </ul>
            </div>

            <div className="p-2 mt-6">
                <p className="text-2xl font-semibold mb-5 text-red-500">Various HTML &lt;img&gt; Tag Attributes:</p>
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-red-500 text-left font-semibold">Attribute</th>
                            <th className="border border-gray-300 px-4 py-2 text-red-500 text-left font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {HTMLAttribute.map((attr, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-3 text-red-500 hover:underline">
                                    <Link to="/">{attr.name}</Link>
                                </td>
                                <td className="border text-md text-gray-700 border-gray-300 px-4 py-3">{attr.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 pl-1 mt-2">
                <h2 className="text-2xl font-semibold text-red-600 ">Table of Content</h2>
                <ul className="list-disc pl-6 mt-4">
                    <li><Link to="#alt-attribute">HTML Image tag – alt Attribute</Link></li>
                    <li><Link to="#width-height">Set Image Size – Width and Height Attribute</Link></li>
                    <li><Link to="#titles">Adding Titles to an Image</Link></li>
                    <li><Link to="#style">Setting Style of an Image</Link></li>
                    <li><Link to="#alignment">Set Image Alignment</Link></li>
                    <li><Link to="#image-link">Adding Image as a Link</Link></li>
                    <li><Link to="#animated">Adding Animated Image</Link></li>
                </ul>
            </div>

            <div className="p-1 mt-2" id="alt-attribute">
                <p className="text-2xl font-semibold text-red-600">HTML Image tag &ndash; alt Attribute</p>
                <p className="text-gray-700 mt-2">
                    The <Link to="#alt-attribute" className="text-red-500 ">alt attribute</Link> in <code>&lt;img&gt;</code> tag provides a text alternative if the image fails to load.
                </p>
            </div>

            <div className="overflow-auto border border-red-400 p-2 mt-5 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlImagetag.text}
                    language={htmlImagetag.language}
                    theme={htmlImagetag.theme}
                    wrapLines
                />
            </div>

            <div className="p-1 mt-4" id="width-height">
                <p className="text-2xl font-semibold text-red-600">Set Image Size – Width and Height Attribute</p>
                <p className="text-gray-700 mt-4">The <code>width</code> and <code>height</code> attributes define image dimensions in pixels.</p>
                <p className="text-gray-700 mt-2">Please refer to the <Link to="#" className="text-red-500">How to set the width and height of an image using HTML?</Link> article.</p>
            </div>

            <div className="overflow-auto border border-red-400 p-2 mt-5 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlImageSetSize.text}
                    language={htmlImageSetSize.language}
                    theme={htmlImageSetSize.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl mt-3 font-semibold text-red-600" id="titles">Adding Titles to an Image</p>
            <p className="mt-2 text-gray-700">
                Use the <code>title</code> attribute in the <code>&lt;img&gt;</code> tag to show a tooltip when hovering.
            </p>

            <div className="overflow-auto border border-red-400 p-2 mt-5 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlImageAddTitle.text}
                    language={htmlImageAddTitle.language}
                    theme={htmlImageAddTitle.theme}
                    wrapLines
                />
            </div>

            <p className="mt-1 text-gray-700">Please refer to the <Link to={'#'} className='text-red-500'>HTML title Attribute article</Link> for further details.</p>

            <p className="text-2xl mt-5 font-semibold text-red-600" id="style">Setting Style of an Image</p>
            <p className="text-gray-700 mt-2">
                You can style images using inline or CSS styles, such as adding or removing borders.
            </p>

            <div className="overflow-auto border border-red-400 p-2 mt-4 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlStyleImage.text}
                    language={htmlStyleImage.language}
                    theme={htmlStyleImage.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl mt-3 font-semibold text-red-600" id="alignment">Set Image Alignment</p>
            <p className="text-gray-700 mt-2">
                Use the <code>align</code> attribute in the <code>&lt;img&gt;</code> tag to align images left, right, or center.
            </p>

            <div className="overflow-auto border border-red-400 p-2 mt-4 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlImageAlignment.text}
                    language={htmlImageAlignment.language}
                    theme={htmlImageAlignment.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl mt-3 font-semibold text-red-600" id="image-link">Adding Image as a Link</p>
            <p className="text-gray-700 mt-2">
                Wrap the <code>&lt;img&gt;</code> tag inside an <code>&lt;a&gt;</code> tag to make it a clickable image.
            </p>

            <div className="overflow-auto border border-red-400 p-2 mt-4 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlAddImageLink.text}
                    language={htmlAddImageLink.language}
                    theme={htmlAddImageLink.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl mt-3 font-semibold text-red-600" id="animated">Adding Animated Image</p>
            <p className="text-gray-700 mt-2">
                To use animated images like GIFs, simply point the <code>src</code> to a GIF file.
            </p>

            <div className="overflow-auto border border-red-400 p-2 mt-4 rounded-2xl w-full bg-[#fafafa]">
                <CopyBlock
                    text={htmlAddingAnimatedImage.text}
                    language={htmlAddingAnimatedImage.language}
                    theme={htmlAddingAnimatedImage.theme}
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
    );
}

export default HTMLImages;
