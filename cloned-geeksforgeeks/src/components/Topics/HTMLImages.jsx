import React from 'react';
import { htmlImage, htmlImagetag, htmlImageSetSize, htmlImageAddTitle, htmlStyleImage, htmlImageAlignment, htmlAddImageLink, htmlAddingAnimatedImage } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';
import HTMLAttribute from "../../utils/HTMLAttribute";

const HTMLImages = () => {
    return (
        <div className="content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide">
            <div className='border-b border-gray-200'>
                <h1 className="text-3xl font-semibold mb-3 text-red-500">HTML Images</h1>
                <p className="text-gray-500  mb-4">Last Updated &#58; 22 March&#44; 2025</p>
            </div>
            <div className=" mt-4">
                <p className=" text-gray-700 ">The<span className='font-semibold'> HTML &lt;img&gt;tag</span> is used to embed an image in web pages by linking them. It creates a placeholder for the image, defined by attributes like <code>src</code>, <code>width</code>, <code>height</code>, and <code>alt</code>, and does not require a closing tag.</p>

                <div className="mt-4">
                    <p className="">There are <span className='font-semibold'>two ways</span> to insert images into a webpage:</p>
                    <ul className='list-disc pl-8 text-gray-700  mt-2'>
                        <li>By providing a full path or address (URL) to access an internet file.</li>
                        <li>By providing the file path relative to the location of the current web page file.</li>
                    </ul>
                </div>
            </div>

            <p className="text-xl font-semibold text-gray-800 mt-5 text-red-500">Basic Example of the &lt;img&gt; Tag&#58;</p>
            <div className="border border-red-400 p-2 mt-5 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
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
                    <li><span className=" font-semibold">src attribute:</span> Specifies the source URL of the image, which in this example is <code>https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75</code>. The image is loaded from this URL when the webpage is accessed.</li>
                    <li><span className=" font-semibold">alt attribute:</span> Provides alternative text for the image, “varcode image,” which describes the image content. If, for any reason, the image cannot be displayed, the text “varcode image” will be shown instead.</li>
                </ul>
            </div>
            <div className=" p-2 mt-6">
                <p className="text-2xl font-semibold mb-5 text-red-500">Various HTML &lt;img&gt; Tag Attributes:</p>
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-red-500 text-left font-semibold">Attribute</th>
                            <th className="border border-gray-300 px-4 py-2 text-red-500 text-left font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">{
                        HTMLAttribute.map((attr, index) => (
                            <tr key={index} className="">
                                <td className="border border-gray-300 px-4 py-3 text-red-500 underline">
                                    <Link to="/">{attr.name}</Link>
                                </td>
                                <td className="border text-md text-gray-700 border-gray-300 px-4 py-3">{attr.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className=" p-6 pl-1 mt-2">
                <h2 className="text-2xl font-semibold text-red-600 ">Table of Content</h2>
                <ul className="list-disc pl-6  underline mt-4">
                    <li><Link to="#alt-attribute">HTML Image tag – alt Attribute</Link></li>
                    <li><Link to="#width-height">Set Image Size – Width and Height Attribute</Link></li>
                    <li><Link to="#titles">Adding Titles to an Image</Link></li>
                    <li><Link to="#style">Setting Style of an Image</Link></li>
                    <li><Link to="#alignment">Set Image Alignment</Link></li>
                    <li><Link to="#image-link">Adding Image as a Link</Link></li>
                    <li><Link to="#animated">Adding Animated Image</Link></li>
                </ul>
            </div>
            <div className=" p-1 mt-2" id="alt-attribute">
                <p className="text-2xl font-semibold text-red-600">HTML Image tag &ndash; alt Attribute</p>
                <p className="text-gray-700 mt-2">
                    The <Link to="#alt-attribute" className="text-red-500 underline">alt attribute</Link> in <code>&lt;img&gt;</code> tag provides a text alternative if the image fails to load. It aids accessibility for users unable to view images due to slow internet, src errors, or screen reader usage.
                </p>
            </div>
            <div className="border border-red-400 p-2 mt-5 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlImagetag.text}
                    language={htmlImagetag.language}
                    theme={htmlImagetag.theme}
                    wrapLines
                />
            </div>
            <div className=" p-1 mt-4">
                <p className="text-2xl font-semibold text-red-600">Set Image Size – Width and Height Attribute</p>
                <p className="text-gray-700 mt-4">
                    The <code>width</code> and <code>height</code> attributes are used to specify the width and height of an image. The attribute values are specified in pixels by default. The <code>width</code> and <code>height</code> attributes are always declared in pixels.
                </p>
                <p className="text-gray-700 mt-2">
                    Please refer to the <Link to="#" className="text-red-500 underline">How to set the width and height of an image using HTML?</Link> article for further details.
                </p>
            </div>
            <div className="border border-red-400 p-2 mt-5 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlImageSetSize.text}
                    language={htmlImageSetSize.language}
                    theme={htmlImageSetSize.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl mt-3 font-semibold text-red-600">Adding Titles to an Image</p>
            <p className="mt-2  text-gray-700">
                The title attribute is displayed as a tooltip when a user hovers over the image.
                To add a title to an image, include the title attribute in the&nbsp;
                <Link to="#alt-attribute" className="text-red-500 underline">&lt;img&gt; tag</Link>,
                providing descriptive text for enhanced user interaction.
            </p>
            <div className="border border-red-400 p-2 mt-5 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlImageAddTitle.text}
                    language={htmlImageAddTitle.language}
                    theme={htmlImageAddTitle.theme}
                    wrapLines
                />
            </div>
            <p className="mt-1 text-gray-700">Please refer to the <Link to={'#'} className='text-red-500'>HTML title Attribute article</Link> for further details.</p>

            <p className="text-2xl mt-5 font-semibold text-red-600">Setting Style of an Image</p>
            <p className="text-gray-700 mt-2 ">
                In this example, we are using the border property to decorate the image.
                By default, every picture has a border around it. By using the border attribute,
                the thickness of the border can be changed. A thickness of “0” means that there
                will be no border around the picture. Please refer to the
                <Link to="#" className="text-red-500 underline"> HTML &lt;img&gt; border Attribute</Link>&nbsp;
                for further details.
            </p>

            <div className="border border-red-400 p-2 mt-4 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlStyleImage.text}
                    language={htmlStyleImage.language}
                    theme={htmlStyleImage.theme}
                    wrapLines
                />
            </div>
            <p className="text-2xl mt-3 font-semibold text-red-600">Set Image Alignment</p>
            <p className="text-gray-700 mt-2">
                Aligning an image in HTML involves using the align attribute within the
                <code className="text-gray-900 font-semibold"> &lt;img&gt;tag</code> to position it horizontally.
                Options include left, right, or center, enhancing page layout and visual appeal.
                Please refer to the&nbsp;
                <Link to="#" className="text-red-500 underline">HTML &lt;img&gt; align Attribute</Link>&nbsp;for further details.
            </p>
            <div className="border border-red-400 p-2 mt-4 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlImageAlignment.text}
                    language={htmlImageAlignment.language}
                    theme={htmlImageAlignment.theme}
                    wrapLines
                />
            </div>
            <p className="text-2xl mt-3 font-semibold text-red-600">Adding Image as a Link</p>
            <p className="text-gray-700 mt-2">
                To add an image as a link, enclose the <code className="text-gray-900">&lt;img&gt;</code>
                tag within an <code className="text-gray-900">&lt;a&gt;</code> tag, setting the image’s
                source with the href attribute. This creates a clickable image linking to external
                content, such as images, videos, or other web pages.
            </p>
            <p className="text-gray-700 mt-4">File paths are of two types:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><span className="font-semibold">Absolute File Paths:</span> It always contains the root element
                    along with the complete directory list required to locate the file.
                </li>
                <li className="mt-2"><span className="font-semibold">Relative File Paths:</span> It is the hierarchical
                    path representation that locates the file or folder on a file system beginning
                    from the current directory.
                </li>
            </ul>

            <div className="border border-red-400 p-2 mt-4 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlAddImageLink.text}
                    language={htmlAddImageLink.language}
                    theme={htmlAddImageLink.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl mt-3 font-semibold text-red-600">Adding Animated Image</p>
            <p className="text-gray-700 mt-2">
                To add an animated image in HTML, use the <code className="text-gray-900">&lt;img&gt;tag </code>with the src attribute pointing to a GIF file,
                providing engaging motion to enhance webpage content.
            </p>

            <div className="border border-red-400 p-2 mt-4 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlAddingAnimatedImage.text}
                    language={htmlAddingAnimatedImage.language}
                    theme={htmlAddingAnimatedImage.theme}
                    wrapLines
                />
            </div>
        </div>
    );
}

export default HTMLImages;
