import React from 'react'
import { htmlSvg, } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HTMLGraphics = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-5 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">SVG Tutorial</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <p className="mb-4">
                <span className='font-semibold'>SVG</span> stands for <span className='font-semibold'>Scalable Vector Graphics</span> and is a powerful <span className='font-semibold'>XML-based markup language</span> for describing two-dimensional vector graphics. It is a web standard that enables the creation of resolution-independent graphics. Unlike raster images (<span className='font-semibold'>such as JPEG or PNG</span>), SVG graphics maintain quality even when <span className='font-semibold'>zoomed or resized</span> and SVG images are resolution-independent, meaning they can be scaled to any size without losing quality. This makes SVG an ideal choice for web design, graphic design, and data visualization. SVG is supported by all major browsers.
            </p>

            <p>
                In this <span className='font-semibold'>SVG tutorial</span>, we'll learn all topics of SVG such as transformations, animations, and interactivity, mastering the art of creating dynamic and visually stunning graphics for the web.
            </p>
            <img className='mt-3 ml-8 mb-5' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220131111737/SVG-Tutorial.png" alt="img" />

            <div className="text-2xl font-semibold mb-4 text-red-600 mt-8">What is SVG?</div>
            <p className="mb-4">
                SVG is an acronym for <span className='font-semibold'>Scalable Vector Graphics</span>. It is used on the Web to create vector-based graphics. The graphics are defined in XML format, and each element and attribute in SVG files can be animated.
            </p>
            <p className="mb-4">
                SVG is recommended by W3C and can be integrated with other standards such as CSS, DOM, XSL, and JavaScript.
            </p>

            <div className="text-xl font-semibold mb-4 text-red-600">Why Learn SVG?</div>
            <ol className="list-decimal list-inside mb-4">
                <li>
                    <span className='font-semibold'>Dynamic Graphics:</span> SVG allows developers to create interactive and dynamic graphics, enhancing user interactivity. It is particularly useful for data visualizations, interactive maps, and other engaging web elements.
                </li>
                <li>
                    <span className='font-semibold'>Smaller File Size:</span> SVG images have smaller file sizes compared to raster formats, resulting in faster website loading times.
                </li>
                <li>
                    <span className='font-semibold'>Browser Compatibility:</span> SVG is compatible with most modern browsers, ensuring consistent rendering across different platforms.
                </li>
                <li>
                    <span className='font-semibold'>Integration with HTML & CSS:</span> SVG seamlessly integrates with HTML and CSS, allowing developers to create complex and responsive design layouts.
                </li>
                <li>
                    <span className='font-semibold'>Versatility:</span> SVG supports various types of graphics, including icons, logos, charts, and maps.
                </li>
            </ol>

            <div className="text-2xl font-semibold mb-4 mt-8 text-red-600">How SVG Integrates with HTML?</div>
            <p>
                There are several ways to use SVG within HTML:
            </p>

            <ol className="list-decimal list-inside mb-4 mt-4">
                <li>
                    <span className='font-semibold'>Inline SVG:</span> Embed SVG directly within HTML using the <code>&lt;svg&gt;</code> element.
                </li>
                <li>
                    <span className='font-semibold'>External SVG:</span> Link to an external SVG file using the <code>&lt;object&gt;</code> or <code>&lt;img&gt;</code> element.
                </li>
                <li>
                    <span className='font-semibold'>SVG as CSS Background:</span> Use SVG images as backgrounds with CSS.
                </li>
                <li>
                    <span className='font-semibold'>Inline SVG with <code>&lt;use&gt;</code>:</span> Reuse SVG elements within HTML using the <code>&lt;use&gt;</code> element.
                </li>
                <li>
                    <span className='font-semibold'>JavaScript Manipulation:</span> Dynamically create or modify SVG elements using JavaScript.
                </li>
            </ol>

            <div className="text-2xl font-semibold mb-2 text-red-600">SVG Examples</div>
            <p>
                In this example, we demonstrates an <span className='font-semibold'>inline SVG example</span>, showcasing a red circle created using the <span className='font-semibold'>&lt;svg&gt;</span> element.
            </p>

            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlSvg.text}
                    language={htmlSvg.language}
                    theme={htmlSvg.theme}
                    wrapLines
                />
            </div>

            <p className="text-2xl font-semibold mt-5">Output:</p>
            <div className="relative mt-3 w-full flex justify-center">
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240320160205/svgImage-Example.png"
                    alt="svg Output"
                    className="border border-gray-300 rounded-lg shadow-md transition-transform duration-300 w-80 hover:scale-105 cursor-pointer"

                />
            </div>

            <div className="text-2xl font-semibold mb-4 text-red-600">SVG Tutorial</div>
            <p className="mb-4">
                Prerequisites: For learning the basics of SVG, it would be helpful to have knowledge of XML, HTML, and JavaScript.
            </p>

            <div className="text-xl font-semibold mb-4">SVG Basics</div>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <Link to={'/'} className="text-red-500 underline">SVG Introduction</Link>
                </li>
                <li>
                    <Link to={'/'} className="text-red-500 underline">HTML SVG-Basics</Link>
                </li>
                <li>
                    <Link to={'/'} className="text-red-500 underline">SVG Full Form</Link>
                </li>
                <li>
                    <Link to={'/'} className="text-red-500 underline">SVG in HTML</Link>
                </li>
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

export default HTMLGraphics