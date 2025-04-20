import React, { useState } from 'react';
import { htmlFavicon } from '../../utils/CodeBlocks';
import { CopyBlock } from 'react-code-blocks';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const HTMLFavicon = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);

    const data = [
        {
            format: 'ICO',
            browsers: ['Edge', 'Chrome', 'Firefox', 'Opera', 'Safari'],
            advantages: 'Supports multiple sizes in a single file; widely supported',
            disadvantages: 'Larger file size compared to others',
        },
        {
            format: 'PNG',
            browsers: ['All Five'],
            advantages: 'High-quality image, supports transparency, smaller file size',
            disadvantages: 'Does not support multiple sizes in one file',
        },
        {
            format: 'GIF',
            browsers: ['All Five'],
            advantages: 'Supports animation',
            disadvantages: 'Limited color palette (256 colors), less ideal for favicons',
        },
        {
            format: 'JPEG',
            browsers: ['All Five'],
            advantages: 'Good for high-quality images',
            disadvantages: 'Does not support transparency, larger file size',
        },
        {
            format: 'SVG',
            browsers: ['All Five'],
            advantages: 'Scalable, small file size, sharp quality at any resolution',
            disadvantages: 'Not supported by all browsers (especially older ones)',
        },
        {
            format: 'webP',
            browsers: ['All Five'],
            advantages: 'Smaller file size with high quality',
            disadvantages: 'Limited browser support, not widely used for favicons',
        },
    ];

    const handleImageClick = (imageSrc) => {
        setZoomedImage(imageSrc);
        setIsZoomed(true);
    };

    const handleCloseZoom = () => {
        setIsZoomed(false);
        setZoomedImage(null);
    };

    return (
        <div className="content-container overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 text-base md:text-lg tracking-wide max-w-7xl mx-auto">
            <div className="border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-semibold mb-2 text-red-600">HTML Favicon</h1>
                <p className="text-gray-600 text-base mb-3">Last Updated: 22 March, 2025</p>
            </div>

            <p className="mt-4 text-lg leading-relaxed">
                An <span className="font-semibold">HTML favicon</span> (or favorite icon) is a small image or icon that represents a website,
                typically shown in the browser tab, bookmarks, and shortcuts. It is used for:
            </p>

            <ul className="mt-3 space-y-2 list-disc list-inside text-lg pl-2">
                <li><strong className="font-semibold">Brand Recognition:</strong> Favicons help increase brand awareness.</li>
                <li><strong className="font-semibold">Professionalism:</strong> They make your site look credible.</li>
                <li><strong className="font-semibold">Usability:</strong> Users can easily identify your site among tabs.</li>
            </ul>

            <h3 className="mt-6 text-2xl font-semibold text-red-600">How to Implement a Favicon in HTML</h3>
            <p className="mt-2 text-lg">
                Add it in the <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code> section like this:
            </p>

            {/* CopyBlock Responsive Container */}
            <div className="border border-red-400 rounded-2xl mt-3 w-full bg-[#fafafa] overflow-x-auto p-2 sm:p-4">
                <CopyBlock
                    text={htmlFavicon.text}
                    language={htmlFavicon.language}
                    theme={htmlFavicon.theme}
                    wrapLines
                    codeBlock
                />
            </div>

            <p className="text-2xl font-semibold mt-5">Output:</p>
            <div className="relative mt-3 w-full flex justify-center">
                <img
                    src="./htmlFaviconPage.jpg"
                    alt="Favicon Output"
                    className="border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full h-auto"
                    onClick={() => handleImageClick('./htmlFaviconPage.jpg')}
                />
            </div>

            {isZoomed && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={handleCloseZoom}>
                    <img src={zoomedImage} alt="Zoomed Favicon Output" className="max-w-full max-h-full rounded-lg shadow-lg border border-gray-300" />
                </div>
            )}

            <p className="mt-6 text-2xl font-semibold text-red-600">In this example:</p>
            <ul className="mt-3 space-y-2 text-lg list-disc list-inside pl-2">
                <li><code className="font-semibold bg-gray-100 px-1 rounded">rel="icon"</code>: Declares it's a favicon.</li>
                <li><code className="font-semibold bg-gray-100 px-1 rounded">href="..."</code>: The URL path to the image.</li>
                <li><code className="font-semibold bg-gray-100 px-1 rounded">type="image/x-icon"</code>: MIME type of the favicon.</li>
            </ul>

            <div className="mt-4 p-3 sm:p-4 bg-red-100 text-gray-700 italic rounded border border-gray-300 text-lg">
                <strong>Note:</strong> Major browsers don’t support sizing properties for favicons.
            </div>

            <h2 className="text-2xl font-semibold mt-6 text-red-600">List of Favicon Sizes</h2>
            <p className="mt-2 text-lg">Common favicon sizes for various devices:</p>

            <div className="overflow-x-auto mt-5 w-full">
                <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-3 py-2 font-semibold text-lg">Name</th>
                            <th className="border border-gray-300 px-3 py-2 font-semibold text-lg">Size</th>
                            <th className="border border-gray-300 px-3 py-2 font-semibold text-lg">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: "favicon-32.png", size: "32×32", desc: "Standard for most desktop browsers." },
                            { name: "favicon-57.png", size: "57×57", desc: "Standard iOS home screen." },
                            { name: "favicon-76.png", size: "76×76", desc: "iPad home screen icon." },
                            { name: "favicon-96.png", size: "96×96", desc: "GoogleTV icon." },
                            { name: "favicon-120.png", size: "120×120", desc: "iPhone retina touch icon." },
                            { name: "favicon-128.png", size: "128×128", desc: "Chrome Web Store & Windows 8 tile." },
                            { name: "favicon-144.png", size: "144×144", desc: "IE10 Metro tile." },
                            { name: "favicon-152.png", size: "152×152", desc: "iPad touch icon." },
                            { name: "favicon-167.png", size: "167×167", desc: "iPad Retina touch icon." },
                            { name: "favicon-180.png", size: "180×180", desc: "iPhone 6 plus." },
                            { name: "favicon-192.png", size: "192×192", desc: "Web App Manifest." },
                            { name: "favicon-195.png", size: "195×195", desc: "Opera Speed Dial." },
                            { name: "favicon-196.png", size: "196×196", desc: "Chrome for Android." },
                            { name: "favicon-228.png", size: "228×228", desc: "Opera Coast icon." },
                        ].map((item, index) => (
                            <tr key={index} className="even:bg-gray-50">
                                <td className="border border-gray-300 px-3 py-2 text-lg">{item.name}</td>
                                <td className="border border-gray-300 px-3 py-2 text-lg">{item.size}</td>
                                <td className="border border-gray-300 px-3 py-2 text-lg">{item.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-semibold mt-6 text-red-600">Favicon File Format Support</h2>
            <p className="mb-4 text-lg">Below is a comparison of various favicon formats:</p>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead className="bg-gray-100">
                        <tr className="text-lg font-semibold">
                            <th className="border border-gray-300 px-3 py-2">File Format</th>
                            <th className="border border-gray-300 px-3 py-2">Browser Support</th>
                            <th className="border border-gray-300 px-3 py-2">Advantages</th>
                            <th className="border border-gray-300 px-3 py-2">Disadvantages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="even:bg-gray-50">
                                <td className="border border-gray-300 px-3 py-2 font-semibold underline hover:text-red-500 text-red-400 text-lg">
                                    <Link to="#">{item.format}</Link>
                                </td>
                                <td className="border border-gray-300 px-3 py-2 text-lg">
                                    <ul className="list-disc list-inside">
                                        {item.browsers.map((browser, idx) => (
                                            <li key={idx}>{browser}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border border-gray-300 px-3 py-2 text-lg">{item.advantages}</td>
                                <td className="border border-gray-300 px-3 py-2 text-lg">{item.disadvantages}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
};

export default HTMLFavicon;
